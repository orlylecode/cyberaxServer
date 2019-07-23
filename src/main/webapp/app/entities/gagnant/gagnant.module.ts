import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { CyberaxServerSharedModule } from 'app/shared';
import {
  GagnantComponent,
  GagnantDetailComponent,
  GagnantUpdateComponent,
  GagnantDeletePopupComponent,
  GagnantDeleteDialogComponent,
  gagnantRoute,
  gagnantPopupRoute
} from './';

const ENTITY_STATES = [...gagnantRoute, ...gagnantPopupRoute];

@NgModule({
  imports: [CyberaxServerSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    GagnantComponent,
    GagnantDetailComponent,
    GagnantUpdateComponent,
    GagnantDeleteDialogComponent,
    GagnantDeletePopupComponent
  ],
  entryComponents: [GagnantComponent, GagnantUpdateComponent, GagnantDeleteDialogComponent, GagnantDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CyberaxServerGagnantModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
