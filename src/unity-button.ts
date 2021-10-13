import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('unity-button')
export class MyElement extends LitElement {
  static styles = css`
    :host button{
      padding: 8px 16px;
      background-color: #fff;
      border: 1px solid #000;
    }

    button:hover {
      background-color: #000;
      color: #fff
    }
  `
  @property({type: String})
  text = 'Button Text'

  render() {
    return html`
      <button @click=${this._onClick} part="button">
      ${this.text}
      <slot name='append-icon'></slot>
      </button>
    `
  }

  private _onClick() {
    console.log("btn clicked");
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'unity-button': MyElement
  }
}
