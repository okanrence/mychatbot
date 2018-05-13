import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { map } from 'rxjs/operators/map';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpServiceProvider } from '../http-service/http-service'
import { Device } from '@ionic-native/device';
import { AppConfig } from '../app.config';
import { ChatMessage } from '../../interfaces/chat-message'
import { UserInfo } from '../../interfaces/user-info'
import { NotificationsServiceProvider } from '../notifications-service/notifications-service'
import { StorageServiceProvider } from '../storage-service/storage-service'


@Injectable()
export class ChatService {

  sessionId: string
  constructor(private http: HttpClient,
              private events: Events, private httpCtrl: HttpServiceProvider,
            private device: Device,  private notificationsCtrl: NotificationsServiceProvider,
          private storageCrtl: StorageServiceProvider) {
            this.sessionId = AppConfig.newGuid();
  }

  
  newMsg(speech) {
    var mockMsg: ChatMessage = {
      messageId: Date.now().toString(),
      userId: '210000198410281948',
      userName: 'Tamara',
      userAvatar: './assets/to-user.jpg',
      toUserId: '140000198202211138',
      time: Date.now(),
      message: speech,
      status: 'success'
    };

    setTimeout(() => {
      this.events.publish('chat:received', mockMsg, Date.now());
    }, Math.random() * 1800)
  }
 
getOldMessages(): Observable<ChatMessage[]> {
    const msgListUrl = './assets/mock/msg-list.json';
    return this.http.get<any>(msgListUrl)
    .pipe(map(response => response.array));
  }

  sendMsg(msg: ChatMessage) {
    return new Promise(resolve => setTimeout(() => resolve(msg), Math.random() * 1000))
    .then(() => {
       var param: any;
       var url = AppConfig.baseUrl() + '&query=' + msg.message + '&lang=en&sessionId=' + this.sessionId +'&deviceId=' + this.device.uuid;
         this.httpCtrl.post(url).subscribe(res =>   {

          var messages = res.result.fulfillment.messages.filter(
            message => message.type == 0);

            for (var item of messages) {
              this.newMsg(item.speech);
          }

          //  var messages = res.result.fulfillment.messages
            // if(messages.length > 3){
            //   this.newMsg(messages[2].speech);
            //   this.newMsg(messages[3].speech);
            // }else{
            //   this.newMsg(res.result.fulfillment.speech);
            // }
         },
        error => {
          this.notificationsCtrl.showToast(error);
          console.log('An Error Occured' + error)
          },
        );    
    })
  }

  getUserInfo(): Promise<UserInfo> {
    const userInfo: UserInfo = {
      id: '140000198202211138',
      name: 'Lanre',
      avatar: './assets/user.jpg'
    };
    return new Promise(resolve => resolve(userInfo));
  }
 
}