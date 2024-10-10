import { html, css, LitElement } from 'lit';
import './MyComponent.js';
import '@lion/ui/define/lion-collapsible.js';
import '@lion/ui/define/lion-dialog.js';
import '@lion/ui/define/lion-tooltip.js';
import '@lion/ui/define/lion-switch-button.js';
import '@lion/ui/define/lion-button.js';
import './NewComponent.js';

export class LionDemoWorkshop extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 50px;
      padding: 25px;
      margin: auto;
      color: var(--lion-demo-workshop-text-color, #000);
    }
  `;

  static properties = {
    header: { type: String },
    counter: { type: Number },
    toggled: { type: Boolean },
  };

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter = 5;
    this.toggled = false;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>Lion Components</h2>
      <lion-collapsible>
        <button slot="invoker">Collapsible Demo</button>
        <div slot="content">
          Most definitions of cars say that they run primarily on roads, seat
          one to eight people, have four tires, and mainly transport people
          rather than goods.
        </div>
      </lion-collapsible>

      <lion-dialog>
        <button slot="invoker">Dialog Demo</button>
        <div slot="content" class="demo-overlay">
          This is the dialog
          <button
            class="close-button"
            @click="${e =>
              e.target.dispatchEvent(
                new Event('close-overlay', { bubbles: true }),
              )}"
          >
            ⨯
          </button>
        </div>
      </lion-dialog>

      <lion-tooltip has-arrow>
        <button slot="invoker" class="demo-tooltip-invoker">
          ToolTip Demo
        </button>
        <div slot="content">This is a tooltip</div>
      </lion-tooltip>

      <div>
        <p>Spice it up!</p>
        <lion-switch-button
          @checked-changed=${() => {
            this.toggled = !this.toggled;
          }}
        ></lion-switch-button>
      </div>

      ${this.toggled ? html`<new-component></new-component>` : ''}
    `;
  }
}
