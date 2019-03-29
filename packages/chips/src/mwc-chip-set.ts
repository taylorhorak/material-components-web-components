import { BaseElement, customElement, html, property, classMap, query, Adapter } from '@material/mwc-base/base-element';
import { MDCChipSetFoundation } from '@material/chips/chip-set/foundation';
import { MDCChipFoundation } from '@material/chips/chip/foundation';
import { Chip as MWCChip } from './mwc-chip';
import { style } from './mwc-chip-set-css';
import { findAssignedElements } from '@material/mwc-base/utils';

@customElement('mwc-chip-set' as any)
export class ChipSet extends BaseElement {

  @query(".mdc-chip-set")
  protected mdcRoot!: HTMLElement;

  @query("slot")
  protected slotEl!: HTMLSlotElement;

  @property({ type: Boolean })
  choice = false;

  @property({ type: Boolean })
  filter = false;

  @property({ type: Boolean })
  input = false;

  @property({ type: Boolean })
  autoRemove = false;
  
  protected _chips: MWCChip[] = [];

  public get chips() {
    return [...this._chips];
  }

  public get selectedChipIds() {
    return this.mdcFoundation.getSelectedChipIds();
  }

  protected get slottedChips(): MWCChip[] {
    return this.slotEl
      ? findAssignedElements(this.slotEl, 'mwc-chip') as MWCChip[]
      : [];
  }

  protected idCounter = 0;

  protected _handleChipInteraction = this._onChipInteraction.bind(this) as EventListenerOrEventListenerObject;

  protected _handleChipSelection = this._onChipSelection.bind(this) as EventListenerOrEventListenerObject;

  protected _handleChipRemoval = this._onChipRemoval.bind(this) as EventListenerOrEventListenerObject;

  protected mdcFoundation!: MDCChipSetFoundation;

  protected readonly mdcFoundationClass = MDCChipSetFoundation;

  protected createAdapter(): Adapter {
    return {
      ...super.createAdapter(),
      removeChip: (chipId) => {
        const index = this._findChipIndex(chipId);
        
        if (index >= 0) {
          this._chips[index].destroy();
          this._chips.splice(index, 1);
        }
      },
      setSelected: (chipId, selected) => {
        const index = this._findChipIndex(chipId);

        if (index >= 0) {
          this._chips[index].selected = selected;
        }
      }
    }
  }

  static styles = style;
  
  render() {
    const classes = {
      'mdc-chip-set': true,
      'mdc-chip-set--choice': this.choice,
      'mdc-chip-set--filter': this.filter,
      'mdc-chip-set--input': this.input
    };

    return html`
      <div class="${classMap(classes)}">
        <slot></slot>
      </div>
    `;
  }

  firstUpdated() {
    super.firstUpdated();

    this.updateComplete
      .then(() => {
        this._initialize();
      });
  }

  protected _initialize() {
    this._chips = this.slottedChips.map(el => {
      el.id = el.id || "mdc-chip-" + ++this.idCounter;
      el.tabIndex = 0;
      return el;
    });

    this._chips.forEach(chip => {
      const { id, selected } = chip;
      if (id && selected) {
        this.mdcFoundation.select(id);
      }
    });
    
    this.addEventListener(MDCChipFoundation.strings.INTERACTION_EVENT, this._handleChipInteraction);
    this.addEventListener(MDCChipFoundation.strings.SELECTION_EVENT, this._handleChipSelection);
    this.addEventListener(MDCChipFoundation.strings.REMOVAL_EVENT, this._handleChipRemoval);
  }

  public addChip(chipEl: HTMLElement) {
    chipEl.id = chipEl.id || `mdc-chip-${++this.idCounter}`;
    // this._chips.push(this.chipFactory_(chipEl));
  };

  /**
   * Handles a chip interaction event
   */
  protected _onChipInteraction(evt: CustomEvent) {
    const {
      chipId
    } = evt.detail;

    this.mdcFoundation.handleChipInteraction(chipId);
  }

  /**
   * Handles a chip selection event, used to handle discrepancy
   * when selection state is set directly on the Chip.
   */
  protected _onChipSelection(evt: CustomEvent) {
    const {
      chipId,
      selected
    } = evt.detail;

    this.mdcFoundation.handleChipSelection(chipId, selected);
  }

  /**
   * Handles the event when a chip is removed.
   */
  protected _onChipRemoval(evt: CustomEvent) {
    const {
      chipId,
      root
    } = evt.detail;

    console.log(evt.detail);
    console.log(root && root.parentElement);

    if (this.autoRemove && root) {
      const chipIndex = this._findChipIndex(chipId);
      const chip = this.children[chipIndex];

      this.removeChild(chip);
    }

    this.mdcFoundation.handleChipRemoval(chipId);
  }

  /**
   * Returns the index of the chip with the given id, or -1 if the chip does not exist.
   */
  protected _findChipIndex(chipId: string) {
    return this._chips.findIndex(chip => chip.id === chipId);
  }
}
