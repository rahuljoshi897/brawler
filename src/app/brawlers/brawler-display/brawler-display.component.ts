import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Brawler, BrawlerType } from '../../~core/models';

@Component({
	selector: 'app-brawler-display',
	templateUrl: './brawler-display.component.html',
	styleUrls: ['./brawler-display.component.css']
})
export class BrawlerDisplayComponent implements OnInit {
	brawlerTypes = BrawlerType;
	@Input() brawlerContent: any;
	constructor(){}

	ngOnInit() {
		console.log(this.brawlerContent,'jjjj')
	}
	getType(id) {
		return this.brawlerTypes[id];
	}
}
