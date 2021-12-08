import { BrawlerType } from './brawler-type.model';

export class Brawler {
	id: number;
	name: string;
	health: number;
	power: number;
	type: BrawlerType;
}