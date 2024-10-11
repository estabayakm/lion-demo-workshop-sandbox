import { html, css, LitElement } from 'lit';
// STEP 1: IMPORT LION COMPONENT DIRECTLY

export class LionDemoWorkshop extends LitElement {
  // STEP 8: ADD SOME FINAL STYLING
  static styles = css``;

  static properties = {
    // amount: { type: Number },
  };

  // constructor() {
  //   super();
  //   // this.amount = 0;
  // }

  // STEP 7: ADD BASIC INPUT HANDLING
  // _handleInputChange(e) {
  //   const element = e.target;
  //   this.amount = element.modelValue;
  // }

  // STEP 3: Invoke custom button component
  // STEP 4: Invoke custom collapsible component
  // STEP 6: Invoke custom input amount component
  render() {
    return html`
      <div class="demo-component">
        <h2>Base Components</h2>
      </div>
    `;
  }
}
