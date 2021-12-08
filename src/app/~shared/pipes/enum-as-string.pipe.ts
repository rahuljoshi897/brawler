import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'enumAsString'
})

export class EnumAsString implements PipeTransform {
	transform(value: any, enumType: { [propKey: number]: any }): any {
		return enumType[value];
	}
}
