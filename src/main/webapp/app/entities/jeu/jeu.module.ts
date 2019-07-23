import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { CyberaxServerSharedModule } from 'app/shared';
import {
  JeuComponent,
  JeuDetailComponent,
  JeuUpdateComponent,
  JeuDeletePopupComponent,
  JeuDeleteDialogComponent,
  jeuRoute,
  jeuPopupRoute
} from './';

const ENTITY_STATES = [...jeuRoute, ...jeuPopupRoute];

@NgModule({
  imports: [CyberaxServerSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [JeuComponent, JeuDetailComponent, JeuUpdateComponent, JeuDeleteDialogComponent, JeuDeletePopupComponent],
  entryComponents: [JeuComponent, JeuUpdateComponent, JeuDeleteDialogComponent, JeuDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CyberaxServerJeuModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
