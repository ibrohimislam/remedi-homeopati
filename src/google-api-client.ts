import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';


import '@vaadin/vaadin-combo-box';

@customElement('google-api-client')
export class GoogleApiClient extends LitElement {

  @property({ type: String })
  clientId!: string;

  @property({ type: String })
  apiKey!: string;

  @property({ type: String })
  scope!: string;

  @property({ type: Array })
  discoveryDocs!: string[];

  get content() {
    return this.shadowRoot?.querySelector('#content') as HTMLDivElement;
  }

  get contentSlot() {
    return this.shadowRoot?.querySelector('slot') as HTMLSlotElement;
  }

  state: 'start'|'logged_in' = 'start';

  render() {
    return html`
      ${this.state === 'start' ? html`
        <button @click="${(e: Event)=>{this.handleAuthClick(e)}}">
          Authorize
        </button>
      ` : html`
        <button @click="${(e: Event)=>{this.handleSignoutClick(e)}}">
          Sign Out
        </button>
      `}
      <slot></slot>
      <div id="content"></div>
    `;
  }

  async connectedCallback() {
    super.connectedCallback()

    gapi.load('client:auth2', ()=>{
      this.initClient();
    });
  }

  initClient() {
    gapi.client.init({
      apiKey: this.apiKey,
      clientId: this.clientId,
      discoveryDocs: this.discoveryDocs,
      scope: this.scope,
    }).then(() => {
      gapi.auth2.getAuthInstance().isSignedIn.listen((status: boolean)=>{
        this.updateSigninStatus(status);
      });
  
      this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    }).catch(err => {
      console.error(err);
    })
  }
  
  updateSigninStatus(isSignedIn: boolean) {
    setTimeout(() => {
      this.state = isSignedIn?'logged_in':'start';
      console.log(gapi.client.sheets);
      if (isSignedIn) {
        const template = this.contentSlot.assignedNodes().find((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            return (element.tagName.toLowerCase() === 'template')
          }
          return false;
        });

        if (template) {
          const content = document.importNode((template as HTMLTemplateElement).content, true);
          this.content.appendChild(content);
        }
      } else {
        this.content.innerHTML = '';
      }
      this.requestUpdate();
    }, 1000);
  }
  
  handleAuthClick(_: Event) {
    gapi.auth2.getAuthInstance().signIn();
  }
  
  handleSignoutClick(_: Event) {
    gapi.auth2.getAuthInstance().signOut();
  }
  
}