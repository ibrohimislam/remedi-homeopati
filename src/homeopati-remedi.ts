import { CSSResultGroup, html, css, LitElement } from "lit";
import { customElement, property, query } from 'lit/decorators.js';

import "@vaadin/vaadin-combo-box";
import { ComboBox } from "@vaadin/vaadin-combo-box";

interface Entry {
  id: string;
  keluhan: string;
  remedi: string;
}

interface EntryContainer {
  value: Entry|undefined;
}

@customElement('homeopati-remedi')
export class HomeopatiRemedi extends LitElement {

  keluhanList: Entry[] = [];
  keluhanSelected: EntryContainer[] = [{ value: undefined }];

  static styles = [ css`
    ul {
      list-style-type: none;
    }
    .outmost {
      margin: 0;
    }
    .caret {
      cursor: pointer;
      user-select: none;
    }
    .caret::before {
      content: "\\25B6";
      color: black;
      display: inline-block;
      font-size: .5em;
      margin-right: 6px;
    }
    .caret-down::before {
      transform: rotate(90deg);
    }
    .nested {
      display: none;
    }
    .active {
      display: block;
    }
  `]

  render() {
    console.log(this.keluhanList.length);

    const result = this.keluhanSelected
      .filter((entry) => entry.value !== undefined)
      .map((entry) => entry.value)
      .reduce((acc, it) => {
        if (it) {
          if (acc.has(it.remedi)) {
            acc.set(it.remedi, acc.get(it.remedi)!.concat(it));
          } else {
            acc.set(it.remedi, [it]);
          } 
        }
        return acc;
      }, new Map<string, Entry[]>());

    return html`
      <table>
        ${this.keluhanSelected.map((it) => html`
          <tr>
            <td>
              <vaadin-combo-box
                style="width: 500px;"
                .items="${this.keluhanList}"
                item-value-path="id"
                item-label-path="keluhan"
                clear-button-visible
                .selectedItem="${it.value}"
                @change="${(e: Event) => { 
                  it.value = (e.target as ComboBox)?.selectedItem;
                  this.requestUpdate();
                }}"
              ></vaadin-combo-box>
            </td>
          </tr>
        `)}
        <tr>
          <td>
            <a style="cursor: pointer; color: blue;"
              @click="${(e: Event) => {
                this.keluhanSelected = this.keluhanSelected.concat({ value: undefined });
                this.requestUpdate();
              }}"
            >+ Tambah Keluhan</a>
          </td>
        </tr>
      </table>

      <ul class="outmost">
        ${Array.from(result.entries()).map(([remedi, keluhan]) => html`
          <li><span class="caret" @click="${(e: Event) => {
            (e.target as HTMLSpanElement)?.parentElement?.querySelector(".nested")?.classList?.toggle("active");
            (e.target as HTMLSpanElement)?.classList.toggle("caret-down");
          }}">${remedi} (${keluhan.length})</span>
            <ul class="nested">
              ${keluhan.map((it) => html`
                <li>${it.keluhan}</li>
              `)}
            </ul>
          </li>
        `)}
      </ul>
    `;
  }

  connectedCallback(){
    super.connectedCallback();
    this.getData();
  }

  getData() {
    console.log(gapi.client.sheets);
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '102ZuXcAs0riyoxkE4NrzcGUQ07WcLnAh9cQcGE15ONA',
      range: 'DB!A:B',
    }).then((response) => {
      const range = response.result;
      console.log(range);
      if (range?.values?.length) {
        this.keluhanList = range.values.map((row) => ({ id: `${row[0]}|${row[1]}`, keluhan: `${row[0]}`, remedi: `${row[1]}`}));
        this.requestUpdate();
      } else {
        this.keluhanList = [{ id: '', keluhan: 'Data tidak ditemukan', remedi: ''}];
      }
    }, (response) => {
      console.error(response.result.error.message);
    });
  }
}