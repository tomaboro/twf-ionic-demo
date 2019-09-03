import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ActiveCardsStore, ActiveCardsState } from './active-cards.store';

@Injectable({ providedIn: 'root' })
export class ActiveCardsQuery extends QueryEntity<ActiveCardsState> {
  constructor(protected store: ActiveCardsStore) {
    super(store);
  }
}
