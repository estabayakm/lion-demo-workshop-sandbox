import { css } from 'lit';
import { LionInputAmount } from '@lion/ui/input-amount.js';

class NewInputAmount extends LionInputAmount {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: flex;
          flex-direction: column;
          justify-content: start-flex;
          width: 100%;
        }

        ::slotted(input) {
          border: 2px solid #525199;
          border-radius: 5px;
        }
      `,
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this._keydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._keydown);
  }

  _keydown(e) {
    const key = e.keyCode;
    const value = Number(e.target.value);
    switch (key) {
      case 38:
        e.target.value = String(value + 1);
        this.modelValue = Number(e.target.value);
        break;
      case 40:
        e.target.value = String(value - 1);
        this.modelValue = Number(e.target.value);
        break;
      default:
        break;
    }
    return true;
  }
}
customElements.define('new-input-amount', NewInputAmount);
