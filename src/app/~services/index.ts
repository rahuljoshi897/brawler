import { BrawlerService } from './brawlers.service';
import { TimerService } from './timer.service';

export * from './brawlers.service';
export * from './in-memory-data.service';
export * from './timer.service';

export const ALL_SERVICES = [
	BrawlerService,
	TimerService
];
