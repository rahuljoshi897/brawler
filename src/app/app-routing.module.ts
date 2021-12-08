import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrawlersComponent } from './brawlers/brawlers.component';
import { BrawlerDetailsComponent } from './brawlers/brawler-details/brawler-details.component';
import { BrawlerFormComponent } from './brawlers/brawler-form/brawler-form.component';
import { BrawlerCreateComponent } from './brawlers/brawler-create/brawler-create.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'brawler', component: BrawlersComponent },
	{ path: 'brawler/create', component: BrawlerCreateComponent },
	{ path: 'brawler/details/:id', component: BrawlerDetailsComponent },


];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
