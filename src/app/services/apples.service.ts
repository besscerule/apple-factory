import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Apple } from "../interfaces/apple.interface";

@Injectable({
    providedIn: 'root'
})

export class ApplesService {
    constructor(private http: HttpClient) { }

    loadAllApples(): Observable<Apple[]> {
        return this.http.get<Apple[]>('/api/apples')
            .pipe(
                map(res => {
                    const response: any = res
                    return response["payload"]
                }),
                shareReplay()
            )
    }
}