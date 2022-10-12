import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TextMessage } from '../model/text-messsage.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  constructor(private http: HttpClient) { }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     "Access-Control-Allow-Origin": "*"
  //   })
  // };

  sendMessage(textMessage: TextMessage){
    var reqBody = {
      
      "message": textMessage.text
    }
    
    return this.http.post(environment.backend.requestTextUrl, reqBody)
    
  }
}
