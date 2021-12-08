import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Brawler } from '../~core/models';

@Injectable()
export class BrawlerService {
	private BRAWLERS_BACKEND_API = 'api/brawlers';
	private httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
	constructor(private httpClient: HttpClient) { }

	getAllBrawlers(): Observable<Brawler[]> {
		return this.httpClient.get<Brawler[]>(this.BRAWLERS_BACKEND_API);
	}

	getBrawlerById(id: number): Observable<Brawler> {
		const url = `${this.BRAWLERS_BACKEND_API}/${id}`;
		return this.httpClient.get<Brawler>(url);
	}

	createBrawler(brawler: Brawler): Observable<Brawler> {
		return this.httpClient.post<Brawler>(this.BRAWLERS_BACKEND_API, brawler, this.httpOptions);
	}
	updateBrawler(brawler: Brawler): Observable<Brawler> {
		return this.httpClient.put<Brawler>(this.BRAWLERS_BACKEND_API, brawler, this.httpOptions);
	}

	deleteBrawler(brawler: Brawler | number): Observable<Brawler> {
		const id = (<Brawler>brawler).id || brawler;
		const url = `${this.BRAWLERS_BACKEND_API}/${id}`;
		return this.httpClient.delete<Brawler>(url, this.httpOptions);
	}
}
