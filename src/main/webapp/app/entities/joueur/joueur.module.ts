import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { CyberaxServerSharedModule } from 'app/shared';
import {
  JoueurComponent,
  JoueurDetailComponent,
  JoueurUpdateComponent,
  JoueurDeletePopupComponent,
  JoueurDeleteDialogComponent,
  joueurRoute,
  joueurPopupRoute
} from './';

const ENTITY_STATES = [...joueurRoute, ...joueurPopupRoute];

@NgModule({
  imports: [CyberaxServerSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [JoueurComponent, JoueurDetailComponent, JoueurUpdateComponent, JoueurDeleteDialogComponent, JoueurDeletePopupComponent],
  entryComponents: [JoueurComponent, JoueurUpdateComponent, JoueurDeleteDialogComponent, JoueurDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CyberaxServerJoueurModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
