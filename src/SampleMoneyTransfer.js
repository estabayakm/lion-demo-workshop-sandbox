import { html, css, LitElement } from 'lit';
import './components/NewButton.js';
import './components/NewCollapsible.js';
import './components/NewInputAmount.js';
import './components/NewTelDropdown.js';

export class SampleMoneyTransfer extends LitElement {
  static styles = css`
    :host {
      min-height: 100vh;
      max-width: 960px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start-flex;

      * {
        margin-bottom: 10px;
      }

      h2 {
        margin-bottom: 25px;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 70%;
      border-radius: 20px;
      background-color: #f0f0f0;
    }
  `;

  static properties = {
    amount: { type: Number },
    telNumber: { type: String },
  };

  constructor() {
    super();
    this.amount = 0;
    this.telNumber = '';
  }

  _handleInputChange(e) {
    const element = e.target;
    const elementName = element.getAttribute('name');
    this[elementName] = element.modelValue;
  }

  render() {
    return html`
      <div class="form">
        <h2>Money Transfer Page</h2>
        <new-tel-dropdown
          name="telNumber"
          @model-value-changed=${e => this._handleInputChange(e)}
        >
        </new-tel-dropdown>
        <new-input-amount
          label="Amount"
          name="amount"
          .formatOptions="$"
          @model-value-changed=${e => this._handleInputChange(e)}
        >
        </new-input-amount>
        <new-collapsible>
          <new-button slot="invoker">Confirm Transfer</new-button>
          <div slot="content">
            <p>The current transfer amount is: Php ${this.amount}</p>
            <p>You are transfering to: ${this.telNumber}</p>
          </div>
        </new-collapsible>
      </div>
    `;
  }
}
