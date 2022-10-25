import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListadoPokemonComponent } from "./pokemon/pages/listado-pokemon/listado-pokemon.component";
import { VerPokemonComponent } from "./pokemon/pages/ver-pokemon/ver-pokemon.component";

const routes: Routes = [
    {
        path: 'pokemon',
        component: ListadoPokemonComponent,
        pathMatch: 'full'
    },
    {
        path: 'pokemon/:nombre',
        component: VerPokemonComponent
    },
    {
        path: '**',
        redirectTo: 'pokemon'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}