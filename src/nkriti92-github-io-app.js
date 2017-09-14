class Nkriti92GithubIoApp extends Polymer.Element {
  static get is() {
    return 'nkriti92-github-io-app';
  }
  static get properties() {
    return {
      image: {
        type: String
      },
      routeData: {
        type: Object,
        observer: '_routeDataObserver'
      },
      title: {
        type: String
      },
      subtitle: {
        type: String
      }
    };
  }
  openPreview() {
    this.$.plain.sizingTarget = this.$.plain.querySelector('.scrollable');
    this.$.plain.open();
  }
  closePreview() {
    this.$.plain.close();
  }
  _routeDataObserver(newValue, oldValue) {
    if (newValue.view == 'hvz') {
      this.image = '/img/IMG_7873.JPG';
      this.title = 'Humans vs Zombies';
      this.subtitle = 'A User Centered Design Project';
    }
    else if (newValue.view == 'gameDesign' ) {
      this.image = '';
      this.title = 'HellWorld';
      this.subtitle = 'Video Game Design';
    }
    else if (newValue.view == 'craigslist' ) {
      this.image = '';
      this.title = 'Craigslist Redesign';
      this.subtitle = 'Craigslist for Students ';
    }
    else if (newValue.view == 'globalWarming' ) {
      this.image = '';
      this.title = 'Climate Change and Global Warming';
      this.subtitle = 'Data Visualization';
    }
    else {
      this.image = '';
      this.title = 'Kriti Nelavelli';
      this.subtitle = 'Design + Build';
    }
  }
}

window.customElements.define(Nkriti92GithubIoApp.is, Nkriti92GithubIoApp);