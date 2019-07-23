import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'joueur',
        loadChildren: './joueur/joueur.module#CyberaxServerJoueurModule'
      },
      {
        path: 'mise',
        loadChildren: './mise/mise.module#CyberaxServerMiseModule'
      },
      {
        path: 'jeu',
        loadChildren: './jeu/jeu.module#CyberaxServerJeuModule'
      },
      {
        path: 'gagnant',
        loadChildren: './gagnant/gagnant.module#CyberaxServerGagnantModule'
      },
      {
        path: 'list-attente',
        loadChildren: './list-attente/list-attente.module#CyberaxServerListAttenteModule'
      },
      {
        path: 'terminal',
        loadChildren: './terminal/terminal.module#CyberaxServerTerminalModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CyberaxServerEntityModule {}
