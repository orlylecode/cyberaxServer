import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { CyberaxServerSharedModule } from 'app/shared';
import {
  MiseComponent,
  MiseDetailComponent,
  MiseUpdateComponent,
  MiseDeletePopupComponent,
  MiseDeleteDialogComponent,
  miseRoute,
  misePopupRoute
} from './';

const ENTITY_STATES = [...miseRoute, ...misePopupRoute];

@NgModule({
  imports: [CyberaxServerSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [MiseComponent, MiseDetailComponent, MiseUpdateComponent, MiseDeleteDialogComponent, MiseDeletePopupComponent],
  entryComponents: [MiseComponent, MiseUpdateComponent, MiseDeleteDialogComponent, MiseDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CyberaxServerMiseModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
