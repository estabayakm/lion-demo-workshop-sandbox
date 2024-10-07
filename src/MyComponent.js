import { css } from 'lit';
import { LionButton } from '@lion/ui/button.js';

class MyComponent extends LionButton {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          color: red;
          background-color: purple;
        }
      `,
    ];
  }
}

customElements.define('my-component', MyComponent);
