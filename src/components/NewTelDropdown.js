import { css } from 'lit';
import { LionInputTelDropdown } from '@lion/ui/input-tel-dropdown.js';

class NewTelDropdown extends LionInputTelDropdown {
  static get styles() {
    return [...super.styles, css``];
  }
}
customElements.define('new-tel-dropdown', NewTelDropdown);
