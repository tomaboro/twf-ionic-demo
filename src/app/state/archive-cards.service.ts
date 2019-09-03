import { Injectable } from '@angular/core';
import { ArchiveCardsState, ArchiveCardsStore } from './archive-cards.store';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'archive-cards' })
export class ArchiveCardsService extends CollectionService<ArchiveCardsState> {
  constructor(private archiveCardsStore: ArchiveCardsStore) {
    super(archiveCardsStore);
  }
}
