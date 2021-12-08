import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromPipes from './pipes';

@NgModule({
	imports: [CommonModule],
	declarations: [...fromPipes.ALL_SHARED_PIPES],
	exports: [...fromPipes.ALL_SHARED_PIPES],
})
export class SharedModule { }
