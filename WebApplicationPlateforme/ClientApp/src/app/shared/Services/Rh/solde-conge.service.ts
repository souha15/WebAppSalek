import { Injectable } from '@angular/core';
import { PathSharedService } from '../../path-shared.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SoldeConge } from '../../Models/RH/solde-conge.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoldeCongeService {


  constructor(private pathService: PathSharedService,
    private http: HttpClient) { }

  readonly rootURL = this.pathService.getPath();
  formData: SoldeConge;
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  //Create Type Dotation

  Add(dotation: SoldeConge) {
    return this.http.post<SoldeConge>(this.rootURL + '/SoldeConges', dotation, this.headers);
  }

  //Save Type Dotation
  Post() {
    return this.http.post(this.rootURL + '/SoldeConges', this.formData, this.headers);
  }

  //Get Type dotation List

  GetDotation(): Observable<SoldeConge[]> {
    return this.http.get<SoldeConge[]>(this.rootURL + '/SoldeConges');
  }

  Get() {
    return this.http.get<SoldeConge[]>(this.rootURL + '/SoldeConges');
  }
  //Get Type Dotation By Id

  GetById(Id) {
    return this.http.get<SoldeConge>(this.rootURL + '/SoldeConges/' + Id);
  }

  //Edit Type Dotation

  Edit() {
    return this.http.put(this.rootURL + '/SoldeConges/' + this.formData.id, this.formData, this.headers);
  }


  //Delete Type Dotation

  Delete(id) {
    return this.http.delete(this.rootURL + '/SoldeConge/' + id);
  }
}
