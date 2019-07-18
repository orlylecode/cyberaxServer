import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CyberaxServerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [CyberaxServerSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [CyberaxServerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CyberaxServerSharedModule {
  static forRoot() {
    return {
      ngModule: CyberaxServerSharedModule
    };
  }
}
