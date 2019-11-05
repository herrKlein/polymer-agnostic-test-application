import { LitElement, html, property, customElement } from 'lit-element';

@customElement('app-main')
class AppMain extends LitElement {

  render() {
    return html`
      <h1>App-main</h1>
      <lit-component></lit-component>
      <polymer-default></polymer-default>
      <polymer-typescript></polymer-typescript>
    `;
  }
}