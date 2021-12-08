import { Component, OnInit } from '@angular/core';

import { Brawler } from '../~core/models';
import { BrawlerService } from '../~services';

@Component({
	selector: 'app-brawlers',
	templateUrl: './brawlers.component.html',
	styleUrls: ['./brawlers.component.css']
})
export class BrawlersComponent implements OnInit {
	brawlersList: any = [];
	constructor(private _brawlerService: BrawlerService) { }

	ngOnInit() {
		this.fetchAllData();	
	}
	 fetchAllData(){
		this._brawlerService.getAllBrawlers().subscribe((resp)=>{
			this.brawlersList = resp;
		})
	 }

	deleteBrawler(brawler: Brawler): void {
		this._brawlerService.deleteBrawler(brawler).subscribe(resp=>{
			const removeIndex = this.brawlersList.findIndex( item => item.id === brawler.id );
			this.brawlersList.splice( removeIndex, 1 );
		})
	}
	identify(index, item){
		return item.id; 
	 }

}
