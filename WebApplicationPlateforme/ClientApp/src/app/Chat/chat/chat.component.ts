import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { UserDetail } from '../../shared/Models/User/user-detail.model';
import { HttpHeaders } from '@angular/common/http';
import { ChatService } from '../../shared/Services/Chat/chat.service';
import { Chat } from '../../shared/Models/Chat/chat.model';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  filter;
  constructor(private UserService: UserServiceService,
    private chatService: ChatService) { }


  ngOnInit(): void {

    this.getUserConnected();

    this.getUser();
    this.autoSave();
    this.getListChatMessage();
  }

  notifchat1: Chat[] = [];
  notifchat2: Chat[] = [];
  notifchat3: Chat[] = [];
 
  nb: number = 0;
  getListChatMessage() {
    this.chatService.ListChat().subscribe(res => {
      this.notifchat1 = res
      this.notifchat1.filter(item => item.userIdReceiver == this.UserIdConnected)
    })
  }
  chatedit: Chat = new Chat();
  getLastMsgPerUser(userid: string) {
    if (this.notifchat2.length != 0) {
      this.notifchat2 = this.notifchat1.filter(item => item.userIdSender == userid && item.attribut1 == 0)
      this.notifchat2.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      this.chatedit = this.notifchat2[this.notifchat2.length - 1];
      return this.chatedit
    } else {
      return this.chatedit
    }  
  }

  save: boolean = false;
  intervale;
  autoSave() {
   this.intervale =  setInterval(() => {
      console.log('setTimeOut');
      this.save = true;
     if (this.user.id != null) {
        this.getMsg();
      }

    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervale) {
      clearInterval(this.intervale);
    }
  }
  users: UserDetail[] = []
  chatnotif4: Chat = new Chat();
  getUser() {
    this.UserService.GetUsersList().subscribe(res => {
      this.users = res
      this.users.filter(item => item.id != this.UserIdConnected)
     /* this.users.forEach(item => {
        this.chatnotif4 = this.getLastMsgPerUser(item.id)
        console.log(this.chatnotif4)
      })*/
    })


  }


  UserIdConnected: string;
  UserNameConnected: string;
  photo: string="";
  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
      this.photo = res.photo;

    })

  }
  /*
   *     date.toLocaleTimeString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });*/
  getMsg() {
    this.chatService.ListChat().subscribe(res => {
      this.chatList = res
      this.FiltredchatList = this.chatList.filter(item => item.userIdReceiver == this.UserIdConnected || item.userIdSender == this.UserIdConnected)
      this.finalchatList = this.FiltredchatList.filter(item => item.userIdReceiver == this.user.id || item.userIdSender == this.user.id)
      this.nbmsg = this.finalchatList.length;
      this.finalchatList.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      this.finalchatList.reverse();
      this.chatnotif = this.finalchatList[this.finalchatList.length - 1];

    })
  }
  //Show List of messages

  msgtest: boolean = false;
  user: UserDetail = new UserDetail();
  chat: Chat = new Chat();
  chat2: Chat = new Chat();
  chatList: Chat[] = [];
  finalchatList: Chat[] = [];
  FiltredchatList: Chat[] = [];
  FiltredchatList2: Chat[] = [];
  nbmsg: number = 0;
  chatnotif: Chat = new Chat();
  showmessages(user: UserDetail) {
    this.msgtest = true;
    this.user = user;
    this.chatService.ListChat().subscribe(res => {
      this.chatList = res
      this.FiltredchatList = this.chatList.filter(item => item.userIdReceiver == this.UserIdConnected || item.userIdSender == this.UserIdConnected)
      this.finalchatList = this.FiltredchatList.filter(item => item.userIdReceiver == user.id || item.userIdSender == user.id)
      this.nbmsg = this.finalchatList.length;
      this.finalchatList.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      this.finalchatList.reverse();

      this.chat2 = this.getLastMsgPerUser(this.user.id);
      console.log(this.chat2)
      if (this.chat2.id != null) {
        this.chat2.attribut1 = 1;
        this.chatService.PutObservableE(this.chat2).subscribe(res => {

        })
      }

    })


  }

  message: Chat = new Chat();


  txtMessage: string = '';
  sendMessage() {
    var date = new Date();
    this.message.date = date.toLocaleString();

    this.message.userIdSender = this.UserIdConnected;
    this.message.userNameSender = this.UserNameConnected;
    this.message.userIdReceiver = this.user.id;
    this.message.userNameReceiver = this.user.fullName;
    this.message.message = this.txtMessage;
    this.message.attribut1 = 0;
    this.chatService.CreateChat(this.message).subscribe(res => {

      this.finalchatList.splice(this.finalchatList.length + 1, 0, this.message)
      this.txtMessage = '';
    
      if (this.chatnotif.userIdReceiver == this.UserIdConnected) {
        this.chatnotif.attribut1 = 1;
        this.chatService.PutObservableE(this.chatnotif).subscribe(res => {

        })
      }
    })
  }
 
}



// Add Messages





/******************* The alst Version **************

Type Script ***********



  this.connection = new signalR.HubConnectionBuilder()
    .withUrl("notify")
    .build();


this.getUser();


this.connection
  .start()
  .then(() =>
    console.log('Connection Started')
  )
  .then(() => {
    this.getConnectionId()
    console.log('Connection ID: ')
    console.log(this.connection.invoke("GetConnectionID"))
    console.log('User Identifier: ')
    console.log(this.connection.invoke("GetUserIdentifier"))
    console.log('User Name: ')
    console.log(this.connection.invoke("GetUserName"))
  })
  .catch(err => console.log("error"))

this.connection.on("ReceiveMessage", function (message) {
  console.log(message)
  var msg = message//.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
  var encodedMsg = this.UserId + " says " + msg;
  var li = document.createElement("li");
  li.textContent = encodedMsg;
  document.getElementById("messages").appendChild(li);
  console.log(message)
});


  }


user: UserDetail[] = []
getUser() {
  this.UserService.GetUsersList().subscribe(res => {
    this.user = res
  })
}

getConnectionId() {

  this.connection.invoke('getconnectionid').then(
    (data, data2) => {
      console.log(data);
      console.log(data2);

    }
  );
  this.connection.on('getconnectionid', function (...data) {
     console.log('data:', data);
   });
}

message: string;
getmessage(event) {
  this.message = event.target.value;
}

UserId: string;
getconnectionId(event) {
  this.UserId = event.target.value
}

send() {
  this.userId = "receiver@gmail.com"
  this.connection.invoke("SendMessageToUser", this.userId, this.message)
    .then(console.log(this.userId))
    .catch(function (err) {
      console.log(err)
    })
}







Html *******************
    <div class="col-md-9 col-sm-8">


      <select (change)="getconnectionId($event)">
        <option *ngFor="let ne of user" value="{{ne.email}}">{{ne.fullName}}</option>
      </select>
      <input type="text" (change)="getmessage($event)" />
      <br />
      <button type="submit" (click)="send()">send</button>
      <ul id="messages">
      </ul>
    </div>

  </div>

*/



/*  this.User
   this.connection.on("UserDisconnected", function (userId) {
     console.log(userId)
     for (var i = 0; i < this.list.length; i++) {
       if (this.list[i] == userId) {
         this.list.remove(i);
       }
     }
   })

   this.connection.on("ReceiveMessage", function (user, message) {
     var msg = message.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
     var encodedMsg = user + " says " + msg;
     var li = document.createElement("li");
     li.textContent = encodedMsg;
     document.getElementById("messages").appendChild(li);
     console.log(message)
   });
  
   */
/*this.connection.invoke('getconnectionid').then(
(data) => {
  console.log(data);
  this.userId = data;
  this.list.push(this.userId)
}
);


  list: string[] = [];
  i: number = 0;
  listlg: number = 0;
  public getConnectionId = () => {
    let list: string[] = [];
    this.connection.on("UserConnected", function (userId) {
      console.log(userId)
      this.userId = userId;
      list.push(userId)
      console.log(list)

    });

    this.list = list;
    this.listlg = this.list.length
  }

  public UserDisconnected = () => {
    this.connection.on("UserDisconnected", function (userId) {
      console.log(userId)
      for (var i = 0; i < this.listlg; i++) {
        if (this.list[i] == userId) {
          this.list.remove(i);
        }
      }
    })
  }

*/
