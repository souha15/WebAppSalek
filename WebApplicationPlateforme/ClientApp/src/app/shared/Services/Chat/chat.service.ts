import { Injectable } from '@angular/core';
import { PathSharedService } from '../../path-shared.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chat } from '../../Models/Chat/chat.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor(private pathService: PathSharedService,
    private http: HttpClient,) { }

  readonly rootURL = this.pathService.getPath();
  formData: Chat;
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }


  getdata() {

  }
  PutObservableE(Transaction: Chat) {
    return this.http.put<Chat>(this.rootURL + '/ChatModels/' + Transaction.id, Transaction, this.headers);

  }
  //Create Chat

  CreateChat(tache: Chat) {
    return this.http.post<Chat>(this.rootURL + '/ChatModels', tache, this.headers);
  }

  //Edit Chat
  EditChat() {
    return this.http.put(this.rootURL + '/ChatModels/' + this.formData.id, this.formData, this.headers);
  }

  // List Chat

  ListChat(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.rootURL + '/ChatModels');
  }

  //Delete Chat

  DeleteChat(id) {
    return this.http.delete(this.rootURL + '/ChatModels/' + id);
  }

  //Put Chat

  PutChatObservable(tache: Chat, Id: number) {
    return this.http.put<Chat>(this.rootURL + '/ChatModels/' + Id, tache, this.headers);
  }

  PutChat(Id) {
    return this.http.put(this.rootURL + '/ChatModels/' + this.formData.id, this.formData, this.headers);
  }

  //Get Chat By Id

  GetById(Id) {
    return this.http.get<Chat>(this.rootURL + '/ChatModels/' + Id);
  }
}
