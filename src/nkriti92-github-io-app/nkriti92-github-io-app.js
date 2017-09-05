/**
     * @customElement
     * @polymer
     */
    class Nkriti92GithubIoApp extends Polymer.Element {
      static get is() { return 'nkriti92-github-io-app'; }
      static get properties() {
        return {
          prop1: {
            type: String,
            value: 'Hello My App'
          }
        };
      }
    }

    window.customElements.define(Nkriti92GithubIoApp.is, Nkriti92GithubIoApp);