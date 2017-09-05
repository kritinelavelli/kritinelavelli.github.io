/**
     * @customElement
     * @polymer
     */
    class KnPreview extends Polymer.Element {
      static get is() { return 'kn-preview'; }
      static get properties() {
        return {
          prop1: {
            type: String,
            value: 'Preview'
          }
        };
      }
    }

    window.customElements.define(KnPreview.is, KnPreview);