import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as fromServices from './~services';

import { BrawlersComponent } from './brawlers/brawlers.component';
import { BrawlerDetailsComponent } from './brawlers/brawler-details/brawler-details.component';
import { BrawlerFormComponent } from './brawlers/brawler-form/brawler-form.component';

import { SharedModule } from './~shared/shared.module';
import { BrawlerDisplayComponent } from './brawlers/brawler-display/brawler-display.component';
import { HomeComponent } from './home/home.component';
import { BrawlerCreateComponent } from './brawlers/brawler-create/brawler-create.component';
import * as fromBrawlers from './brawlers';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		...fromBrawlers.ALL_BRAWLERS_COMPONENTS
	],
	imports: [
		BrowserModule,
		FormsModule,
		SharedModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		HttpClientInMemoryWebApiModule.forRoot(
			fromServices.InMemoryDataService, { dataEncapsulation: false }
		)
	],
	providers: [...fromServices.ALL_SERVICES],
	bootstrap: [AppComponent]
})
export class AppModule { }
