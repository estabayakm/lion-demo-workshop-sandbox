import { css } from 'lit';
// STEP 2: EXTEND A LION COMPONENT
import { LionButton } from '@lion/ui/button.js';

class NewButton extends LionButton {
  static get styles() {
    return [...super.styles, css``];
  }
}
customElements.define('new-button', NewButton);
