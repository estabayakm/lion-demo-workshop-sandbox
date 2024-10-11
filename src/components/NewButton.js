import { css } from 'lit';
import { LionButton } from '@lion/ui/button.js';

class NewButton extends LionButton {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          border-radius: 12px;
          font-family: sans-serif;
          color: #525199;
          font-size: 16px;
          background: #ffffff;
          padding: 5px 10px 5px 10px;
          border: solid #525199 2px;
          text-decoration: none;
          width: auto;
        }

        :host(:hover) {
          color: #ffffff;
          background: #525199;
          text-decoration: none;
        }
      `,
    ];
  }
}
customElements.define('new-button', NewButton);
