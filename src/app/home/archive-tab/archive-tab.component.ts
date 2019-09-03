import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArchiveCardsQuery } from '../../state/archive-cards.query';
import { Card } from '../../state/card.model';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { map, mergeMap } from 'rxjs/operators';
import { ArchiveCardsService } from '../../state/archive-cards.service';

@Component({
  selector: 'app-archive-tab',
  templateUrl: './archive-tab.component.html',
  styleUrls: ['./archive-tab.component.scss'],
})
export class ArchiveTabComponent implements OnInit, OnDestroy {
  cards$: Observable<Card[]>;

  ngOnInit(): void {
    // Subscribe to the collection
    this.archiveCardsService.syncCollection()
      .pipe(untilDestroyed(this))
      .subscribe();

    // Get the list from the store
    this.cards$ = this.archiveCardsQuery.selectAll();
  }

  ngOnDestroy(): void { }

  constructor(
   private archiveCardsService: ArchiveCardsService,
   private archiveCardsQuery: ArchiveCardsQuery
 ) { }
}
