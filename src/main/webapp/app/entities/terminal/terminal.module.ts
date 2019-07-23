import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { CyberaxServerSharedModule } from 'app/shared';
import {
  TerminalComponent,
  TerminalDetailComponent,
  TerminalUpdateComponent,
  TerminalDeletePopupComponent,
  TerminalDeleteDialogComponent,
  terminalRoute,
  terminalPopupRoute
} from './';

const ENTITY_STATES = [...terminalRoute, ...terminalPopupRoute];

@NgModule({
  imports: [CyberaxServerSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    TerminalComponent,
    TerminalDetailComponent,
    TerminalUpdateComponent,
    TerminalDeleteDialogComponent,
    TerminalDeletePopupComponent
  ],
  entryComponents: [TerminalComponent, TerminalUpdateComponent, TerminalDeleteDialogComponent, TerminalDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CyberaxServerTerminalModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
