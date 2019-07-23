import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { CyberaxServerSharedModule } from 'app/shared';
import {
  ListAttenteComponent,
  ListAttenteDetailComponent,
  ListAttenteUpdateComponent,
  ListAttenteDeletePopupComponent,
  ListAttenteDeleteDialogComponent,
  listAttenteRoute,
  listAttentePopupRoute
} from './';

const ENTITY_STATES = [...listAttenteRoute, ...listAttentePopupRoute];

@NgModule({
  imports: [CyberaxServerSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ListAttenteComponent,
    ListAttenteDetailComponent,
    ListAttenteUpdateComponent,
    ListAttenteDeleteDialogComponent,
    ListAttenteDeletePopupComponent
  ],
  entryComponents: [ListAttenteComponent, ListAttenteUpdateComponent, ListAttenteDeleteDialogComponent, ListAttenteDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CyberaxServerListAttenteModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
