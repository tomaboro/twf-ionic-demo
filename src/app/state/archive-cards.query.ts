import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ArchiveCardsStore, ArchiveCardsState } from './archive-cards.store';

@Injectable({ providedIn: 'root' })
export class ArchiveCardsQuery extends QueryEntity<ArchiveCardsState> {
  constructor(protected store: ArchiveCardsStore) {
    super(store);
  }
}
