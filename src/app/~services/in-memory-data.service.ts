import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Brawler, BrawlerType } from '../~core/models';
import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const brawlers: Brawler[] = [
			{ id: 1, name: 'Barley', power: 680, health: 2400, type: BrawlerType.Rare },
			{ id: 2, name: 'Mortis', power: 900, health: 3800, type: BrawlerType.Mythic },
			{ id: 3, name: 'Pam', power: 240, health: 4300, type: BrawlerType.Epic },
			{ id: 4, name: 'Piper', power: 1640, health: 2400, type: BrawlerType.Epic },
			{ id: 5, name: 'Crow', power: 300, health: 2400, type: BrawlerType.Legendary },
			{ id: 6, name: 'Leon', power: 440, health: 3200, type: BrawlerType.Legendary },
			{ id: 7, name: 'Carl', power: 640, health: 440, type: BrawlerType.SuperRare },
			{ id: 8, name: 'Rosa', power: 480, health: 5000, type: BrawlerType.Rare },
			{ id: 9, name: 'Bo', power: 500, health: 3600, type: BrawlerType.Common },

		];
		return { brawlers };
	}

	genId(brawlers: Brawler[]): number {
		return brawlers.length > 0 ? Math.max(...brawlers.map(brawler => brawler.id)) + 1 : 1;
	}
}
