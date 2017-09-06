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
      thumbnailClicked() {

      }
      openPreview() {
        this.$.plain.sizingTarget = this.$.plain.querySelector('.scrollable');
        this.$.plain.open();
      }
      closePreview() {
        this.$.plain.close();
      }
    }

    window.customElements.define(Nkriti92GithubIoApp.is, Nkriti92GithubIoApp);