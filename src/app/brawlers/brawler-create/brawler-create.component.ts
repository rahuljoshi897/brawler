import { Component, OnInit } from '@angular/core';

import { Brawler } from '../../~core/models';
import { BrawlerService } from '../../~services';
import {Router} from '@angular/router'
@Component({
	selector: 'app-brawler-create',
	templateUrl: './brawler-create.component.html',
	styleUrls: ['./brawler-create.component.css']
})
export class BrawlerCreateComponent implements OnInit {

	constructor( private _router: Router, private _brawlerService: BrawlerService) { }

	ngOnInit() {

	}

	goBack() {
		this._router.navigate(['brawler']);
	}

	save(newBrawler: Brawler): void {
		this._brawlerService.createBrawler(newBrawler).subscribe(resp=>{
			this._router.navigate(['brawler'])
		});
	}
}
