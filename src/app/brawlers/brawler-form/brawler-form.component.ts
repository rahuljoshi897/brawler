import { Component, SimpleChange, OnChanges,Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators,} from '@angular/forms'
import { Brawler, BrawlerType } from '../../~core/models';
import { nameof } from '../../~core/utilities';


@Component({
	selector: 'app-brawler-form',
	templateUrl: './brawler-form.component.html',
	styleUrls: ['./brawler-form.component.css']
})
export class BrawlerFormComponent implements OnInit, OnChanges {
	constructor(private fb: FormBuilder){

	}
	brawlerFrm: FormGroup;
	@Output() dataSubmit = new EventEmitter();
	@Output() goBack = new EventEmitter();
	@Input() brawlerContent: any;
	@Input() isEdit: any;


	brawlerTypes = BrawlerType;

	ngOnInit(){
		this.brawlerFrm = this.fb.group({
			name: ['', Validators.required],
			health: [''],
			power: [''],
			type:['']
		});
		if(this.isEdit){
			this.updateFormControls();
		}
	}
	ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
	}
	updateFormControls(){
		this.brawlerFrm.patchValue({
			name: this.brawlerContent.name,
			health: this.brawlerContent.health,
			power: this.brawlerContent.power,
			type: this.brawlerContent.type
		})
	}
	onCancel() {
		this.goBack.emit(true);
	}

	onSubmit() {
		if(this.brawlerFrm.invalid){
			this.brawlerFrm.controls['name'].markAsTouched();	
			return false;
		}
		this.dataSubmit.emit(this.brawlerFrm.value);
	}
}
