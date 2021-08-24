import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadFilesService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  upload(formData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/upload`, formData);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
