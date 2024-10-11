import { css } from 'lit';
import { LionInputTelDropdown } from '@lion/ui/input-tel-dropdown.js';

class NewTelDropdown extends LionInputTelDropdown {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: flex;
          flex-direction: column;
          justify-content: start-flex;
        }

        ::slotted(input) {
          border: 2px solid #525199;
          border-radius: 5px;
        }

        ::slotted([slot='prefix']) {
          border: 2px solid #525199;
          border-radius: 5px;
          background-color: #525199;
          color: #ffffff;
          width: 120px;
        }
      `,
    ];
  }
}
customElements.define('new-tel-dropdown', NewTelDropdown);
