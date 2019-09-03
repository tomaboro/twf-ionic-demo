import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Card } from './card.model';
import { CollectionState } from 'akita-ng-fire';

export interface ArchiveCardsState extends CollectionState<Card> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'archive-cards' })
export class ArchiveCardsStore extends EntityStore<ArchiveCardsState> {
  constructor() {
    super();
  }
}

