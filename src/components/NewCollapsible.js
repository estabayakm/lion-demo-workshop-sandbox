import { css } from 'lit';
import { LionCollapsible } from '@lion/ui/collapsible.js';

class NewCollapsible extends LionCollapsible {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        ::slotted(new-button) {
          font-size: 12px;
          padding: 3px 6px;
        }

        ::slotted(div) {
          font-family: cursive;
        }
      `,
    ];
  }
}
customElements.define('new-collapsible', NewCollapsible);
