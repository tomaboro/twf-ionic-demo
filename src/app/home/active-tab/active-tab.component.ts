import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewCardComponent } from '../new-card/new-card.component';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ActiveCardsQuery } from '../../state/active-cards.query';
import { map, mergeMap } from 'rxjs/operators';
import { ActiveCardsService } from '../../state/active-cards.service';
import { Card } from '../../state/card.model';
import { ArchiveCardsService } from '../../state/archive-cards.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-active-tab',
  templateUrl: './active-tab.component.html',
  styleUrls: ['./active-tab.component.scss'],
})
export class ActiveTabComponent implements OnInit, OnDestroy {
  cards$: Observable<Card[]>;
  filteredCards$: Observable<Card[]>;

  private filter$: Subject<string> = new BehaviorSubject('');

  constructor(
    private modalCtrl: ModalController,
    private activeCardsQuery: ActiveCardsQuery,
    private activeCardsService: ActiveCardsService,
    private archiveCardsService: ArchiveCardsService
  ) { }

  ngOnInit(): void {
    this.activeCardsService.syncCollection()
      .pipe(untilDestroyed(this))
      .subscribe();

    this.cards$ = this.activeCardsQuery.selectAll();

    this.filteredCards$ = this.cards$.pipe(
      mergeMap(cards =>
        this.filter$.pipe(
          map(name => cards.filter(card => card.title.includes(name)))
        )
      )
    );
  }

  // Necessary for untilDestroyed working correctly
  ngOnDestroy(): void { }

  addNewCard(): void {
    this.modalCtrl.create(
      {
        component: NewCardComponent
      }
    ).then(modal => modal.present());
  }

  searchRequest(event: CustomEvent): void {
    this.filter$.next(event.detail.value);
  }

  upgrade(card: Card): void {
    this.activeCardsService.update(card.id, { clicks: card.clicks + 1});
  }

  buy(card: Card): void {
    this.activeCardsService.remove(card.id);
    this.archiveCardsService.add(card);
  }

  archive(card: Card): void {
    this.activeCardsService.remove(card.id);
  }
}
