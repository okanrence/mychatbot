import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import {  NgZone } from '@angular/core';
import { Events, Content } from 'ionic-angular';
/**
 * Generated class for the ChatViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-view',
  templateUrl: 'chat-view.html',
})
export class ChatViewPage {

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private ttsCtrl : TextToSpeech, private speech : SpeechRecognition, private zone: NgZone  ) {
  }

  


  text: string;
  isListening: boolean = false;
  matches: Array<String>;
  Speak(text){

  this.ttsCtrl.speak(text)
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));

  }


  async hasPermission():Promise<boolean> {
    try {
      const permission = await this.speech.hasPermission();
      console.log(permission);

      return permission;
    } catch(e) {
      console.log(e);
    }
  }

  async getPermission():Promise<void> {
    try {
      this.speech.requestPermission();
    } catch(e) {
      console.log(e);
    }
  }

  listen(): void {
    console.log('listen action triggered');
    if (this.isListening) {
      this.speech.stopListening();
      this.toggleListenMode();
      return;
    }

    this.toggleListenMode();
    let _this = this;

    this.speech.startListening()
      .subscribe(matches => {
        _this.zone.run(() => {
          _this.matches = matches;
        })
      }, error => console.error(error));

  }

  // listen(): void {
  //   console.log('listen action triggered');
  //   if (this.isListening) {
  //     this.speech.stopListening();
  //     this.toggleListenMode();
  //     return;
  //   }

  //   this.toggleListenMode();
  //   let _this = this;

  //   this.speech.startListening()
  //     .subscribe(matches => {
  //       _this.zone.run(() => {
  //         _this.matches = matches;
  //       })
  //     }, error => console.error(error));

  // }




  toggleListenMode():void {
    this.isListening = this.isListening ? false : true;
    console.log('listening mode is now : ' + this.isListening);
  }
}