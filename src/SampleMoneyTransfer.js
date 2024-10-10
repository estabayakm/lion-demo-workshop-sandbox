import { html, css, LitElement } from 'lit';
import './components/NewButton.js';
import './components/NewCollapsible.js';
import './components/NewInputAmount.js';
import './components/NewTelDropdown.js';
import '@lion/ui/define/lion-button.js';
import '@lion/ui/define/lion-button-submit.js';
import '@lion/ui/define/lion-form.js';
import '@lion/ui/define/lion-dialog.js';
import '@lion/ui/define/lion-input.js';
import { loadDefaultFeedbackMessages } from '@lion/ui/validate-messages.js';

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

    .submit-button {
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

    .submit-button:hover {
      color: #ffffff;
      background: #525199;
      text-decoration: none;
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

    lion-form {
      width: 70%;
    }

    lion-button {
      font-family: sans-serif;
      color: #525199;
      font-size: 16px;
      background: transparent;
      text-decoration: none;

      :hover {
        background: red;
      }
    }

    lion-input > input {
      border: 2px solid #525199;
      border-radius: 5px;
    }
  `;

  static properties = {
    transferName: { type: String },
    amount: { type: Number },
    telNumber: { type: String },
    openDialog: { type: Boolean },
  };

  constructor() {
    super();
    this.amount = 0;
    this.telNumber = '';
    this.openDialog = false;
  }

  _toggleDialog(open) {
    this.openDialog = open;
  }

  _handleDialog(e) {
    this.openDialog = e.detail.opened;
  }

  _handleInputChange(e) {
    const element = e.target;
    const elementName = element.getAttribute('name');
    this[elementName] = element.modelValue;
  }

  _submitHandler() {
    this.openDialog = true;
  }

  render() {
    loadDefaultFeedbackMessages();
    return html`
      <div class="form">
        <h2>Money Transfer Page</h2>
        <lion-form @submit="${this._submitHandler}">
          <form>
            <lion-input
              label="Name"
              name="transferName"
              @model-value-changed=${e => this._handleInputChange(e)}
            >
            </lion-input>
            <new-tel-dropdown
              label="Telephone number"
              name="telNumber"
              @model-value-changed=${e => this._handleInputChange(e)}
            >
            </new-tel-dropdown>
            <new-input-amount
              label="Amount"
              name="amount"
              @model-value-changed=${e => this._handleInputChange(e)}
            >
            </new-input-amount>
            <lion-button-submit class="submit-button">
              Confirm
            </lion-button-submit>
          </form>
        </lion-form>
        <new-collapsible>
          <lion-button id="detailsButton" slot="invoker"
            ><u>Transfer Details</u></lion-button
          >
          <div slot="content">
            <p>You are transfering to: ${this.transferName}</p>
            <p>At their number: ${this.telNumber}</p>
            <p>The current transfer amount is: Php ${this.amount}</p>
          </div>
        </new-collapsible>
      </div>
      <lion-dialog
        ?opened=${this.openDialog}
        @opened-changed=${this._handleDialog}
      >
        <div slot="content" class="dialog demo-box">
          Congrats! Your transfer to ${this.transferName} was successful.
          <button class="close-button" @click=${this._toggleDialog(false)}>
            ⨯
          </button>
        </div>
      </lion-dialog>
    `;
  }
}
