import { Component } from '@angular/core';
import { TimerService } from '../~services';

const DEFAULT_SECONDS = 60;
const DEFAULT_MINUTES = 60;
const DEFAULT_HOURS = 24

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
	timerTime: String;

	constructor(private timerService: TimerService) {}

	public startTimer() : void {
		this.timerService.start().subscribe((value: number) => this.timerTime = this.transformTimerTime(value + 20));
	}

	private transformTimerTime(timerTime: number) : String {
		const seconds = timerTime % DEFAULT_SECONDS;
		const minutes = Math.round(timerTime / DEFAULT_SECONDS) % DEFAULT_MINUTES;
		const hours = Math.round(timerTime / (DEFAULT_SECONDS * DEFAULT_MINUTES)) % DEFAULT_HOURS;
		const days = Math.round(timerTime / (DEFAULT_SECONDS * DEFAULT_MINUTES * DEFAULT_HOURS));

		return `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	}
}
