import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../state/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card: Card;
  @Input() buttonsDisabled = false;

  @Output() upgradeClick: EventEmitter<void> = new EventEmitter();
  @Output() buyClick: EventEmitter<void> = new EventEmitter();
  @Output() archiveClick: EventEmitter<void> = new EventEmitter();
}
