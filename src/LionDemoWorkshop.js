import { html, css, LitElement } from 'lit';
import './components/NewButton.js';
import './components/NewCollapsible.js';
import './components/NewInputAmount.js';

export class LionDemoWorkshop extends LitElement {
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

      #inputAmount {
        width: 60%;
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
  };

  constructor() {
    super();
    this.amount = 0;
  }

  _handleInputChange(e) {
    const element = e.target;
    const elementName = element.getAttribute('name');
    this[elementName] = element.modelValue;
  }

  render() {
    return html`
      <div class="form">
        <h2>Base Components</h2>
        <new-input-amount
          label="Amount"
          name="amount"
          id="inputAmount"
          @model-value-changed=${e => this._handleInputChange(e)}
        >
        </new-input-amount>
        <new-collapsible>
          <new-button slot="invoker">Confirm Transfer</new-button>
          <div slot="content">
            The current transfer amount is: Php ${this.amount}
          </div>
        </new-collapsible>
      </div>
    `;
  }
}
