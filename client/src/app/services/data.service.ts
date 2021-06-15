import { Injectable, Inject } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class DataService {
    private m_url: string;
    m_http: HttpClient;

    constructor(@Inject(String) private url: string, private http: HttpClient) {
        this.m_url = url;
        this.m_http = http;
    }

    getAll() {
        return this.m_http.get(this.m_url)
        .pipe(
          retry(1),
          catchError(this.handleError)
        );
    }

    private handleError(error) {
        let error_msg = "";
        if (error.error instanceof ErrorEvent) {
            // client-side error
            error_msg = `Error: ${error.error.message}`;
        } else {
            // server-side error
            error_msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(error_msg);
        return throwError(error_msg);
    }
  }
