import { css, html, LitElement } from 'lit';
import '@lion/ui/define/lion-collapsible.js';
import '@lion/ui/define/lion-dialog.js';
import '@lion/ui/define/lion-tooltip.js';
import '@lion/ui/define/lion-switch-button.js';
import '@lion/ui/define/lion-button.js';

class NewComponent extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 50px;
      color: var(--lion-demo-workshop-text-color, #000);
      font-family: 'Trebuchet MS', sans-serif;
    }

    button {
      padding: 12px 16px;
      margin: 0 4px;
      cursor: pointer;
      background-color: #0078d4;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-family: 'Trebuchet MS', sans-serif;
      transition:
        background-color 0.3s,
        box-shadow 0.3s;
    }

    button:hover {
      background-color: #005a9e;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    button:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.5);
    }

    .demo-overlay {
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .close-button {
      background-color: #d9534f;
      color: white;
    }

    .close-button:hover {
      background-color: #c9302c;
    }

    lion-collapsible::part(invoker) {
      background-color: #0078d4;
      color: white;
      border-radius: 4px;
      padding: 12px 16px;
      cursor: pointer;
      transition:
        background-color 0.3s,
        box-shadow 0.3s;
    }

    lion-collapsible::part(invoker):hover {
      background-color: #005a9e;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .collapsible-content,
    .tooltip-content {
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin: 8px;
      max-width: 400px;
    }
  `;

  render() {
    return html`
      <h2>New Components</h2>
      <lion-collapsible>
        <button slot="invoker">Collapsible Demo</button>
        <div slot="content" class="collapsible-content">
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
            Close
          </button>
        </div>
      </lion-dialog>

      <lion-tooltip has-arrow>
        <button slot="invoker" class="demo-tooltip-invoker">
          Tooltip Demo
        </button>
        <div slot="content" class="tooltip-content">This is a tooltip</div>
      </lion-tooltip>
    `;
  }
}

customElements.define('new-component', NewComponent);
