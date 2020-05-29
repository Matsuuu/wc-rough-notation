import { LitElement, html, customElement, property } from 'lit-element';
import WcRoughNotation from './WcRoughNotation';
import { annotationGroup } from 'rough-notation';
import { RoughAnnotation } from 'rough-notation/lib/model';

@customElement('wc-rough-notation-group')
export default class WcRoughNotationGroup extends LitElement {
  @property({ type: Array })
  annotationElements: Array<WcRoughNotation> = [];
  @property({ type: Boolean })
  showOnLoad = false;

  firstUpdated() {
    const slotElement = this.shadowRoot
      ?.querySelector('slot')
      ?.assignedNodes()
      ?.filter(node => node.nodeName === 'WC-ROUGH-NOTATION');
    this.annotationElements = slotElement as Array<WcRoughNotation>;
    if (this.showOnLoad) {
      this.show();
    }
  }

  show() {
    if (this.annotationElements.some(el => el.order)) {
      this.annotationElements.sort((a, b) => {
        return a.order - b.order;
      });
    }

    const ag = annotationGroup(
      this.annotationElements.map(ae => ae.annotation as RoughAnnotation)
    );
    ag.show();
  }

  render() {
    return html`<slot></slot>`;
  }
}
