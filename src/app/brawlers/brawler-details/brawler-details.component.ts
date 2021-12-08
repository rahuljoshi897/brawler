import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BrawlerService } from '../../~services';

@Component({
	selector: 'app-brawler-detail',
	templateUrl: './brawler-details.component.html',
	styleUrls: ['./brawler-details.component.css']
})
export class BrawlerDetailsComponent implements OnInit {
	brawlerContent:any = {};
	isShowEdit = true;	
	subs: Subscription;
	@ViewChild('brawlerDetails') brawlerDetails: TemplateRef<any>;
	@ViewChild('brawlerEditing') brawlerEditing: TemplateRef<any>;
	liveTemplate: TemplateRef<any>;
	brawlerId: number;
	constructor(private _router: Router,private route: ActivatedRoute, private _brawlerService: BrawlerService) { }
	ngOnInit(): void {
		const id = parseInt(this.route.snapshot.params['id']);
		this.brawlerId = id;
		this._brawlerService.getBrawlerById(id).subscribe(resp=>{
			this.brawlerContent = resp;
			this.updateDefaultState();
		})
	}

	goBack(): void {
		this._router.navigate(['brawler']);
	}

	edit(): void {
		this.liveTemplate = this.brawlerEditing;
		this.isShowEdit = false;
	}
	onSubmit(value){
		value['id'] = this.brawlerId;
		this.brawlerContent = value;
		this._brawlerService.updateBrawler(value).subscribe(resp=>{
			this.updateDefaultState();
		})
	}
	onCancel(){
		this.updateDefaultState();
	}
	updateDefaultState(){
		this.liveTemplate = this.brawlerDetails;
		this.isShowEdit = true;
	}
}
