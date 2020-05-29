import { html, LitElement, property, customElement } from 'lit-element';
import { annotate } from 'rough-notation';
import { RoughAnnotation, RoughAnnotationType } from 'rough-notation/lib/model';

@customElement('wc-rough-notation')
export default class WcRoughNotation extends LitElement {
  @property({ type: String })
  type: RoughAnnotationType = 'underline';

  @property({ type: Boolean })
  noAnimation = false;

  @property({ type: Number })
  animationDuration = 800;

  @property({ type: Number })
  animationDelay = 0;

  @property({ type: String })
  color = 'currentColor';

  @property({ type: Number })
  strokeWidth = 1;

  @property({ type: Number })
  padding = 5;

  @property({ type: Object })
  annotation?: RoughAnnotation;

  @property({ type: Boolean })
  showOnLoad = false;

  @property({ type: Number })
  order = 0;

  firstUpdated() {
    const slotElements = this.shadowRoot
      ?.querySelector('slot')
      ?.assignedNodes()
      ?.filter(node => node instanceof HTMLElement);

    slotElements?.forEach(se => {
      this.annotation = annotate(se as HTMLElement, {
        type: this.type,
        animate: !this.noAnimation,
        animationDuration: this.animationDuration,
        animationDelay: this.animationDelay,
        color: this.color,
        strokeWidth: this.strokeWidth,
        padding: this.padding,
      });
      if (this.showOnLoad) {
        this.annotation.show();
      }
    });
  }

  isShowing(): boolean {
    return this.annotation != null && this.annotation.isShowing();
  }

  show(): void {
    if (this.annotation) {
      this.annotation.show();
    }
  }

  hide(): void {
    if (this.annotation) {
      this.annotation.hide();
    }
  }

  remove(): void {
    if (this.annotation) {
      this.annotation.remove();
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}
