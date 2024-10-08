import { css } from 'lit';
import { LionInputAmount } from '@lion/ui/input-amount.js';

class NewInputAmount extends LionInputAmount {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          div {
            margin-right: 5px;
          }
        }

        ::slotted(input) {
          border: 2px solid #525199;
          border-radius: 5px;
        }
      `,
    ];
  }
}
customElements.define('new-input-amount', NewInputAmount);
