import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Chat } from '../pages/chat/chat';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Chat;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
     public statusBar: StatusBar,
      public splashScreen: SplashScreen,
       private speechRecognition: SpeechRecognition,

      
      ) {
    this.initializeApp();
   
    // used for an example of ngFor and navigation
    
    
    this.pages = [
      { title: 'Conversations', component: Chat },
      { title: 'Settings', component: Chat }
     // { title: 'Logout', component: Chat }
     
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


      this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => 
          { 
            console.log('Speech Recognition is available :' + available);
            this.speechRecognition.hasPermission().then((hasPermission) => {
            console.log('Speech Recognition permmited :' + hasPermission);
              if(!hasPermission){
                this.speechRecognition.requestPermission().then(() =>   console.log('Speech Recognition granted ' )).catch((reason: any) => console.log(reason));
              }
            }).catch((reason: any) => console.log(reason));
         })
          .catch((reason: any) => console.log(reason));


      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async hasPermission():Promise<boolean> {
    try {
      const permission = await this.speechRecognition.hasPermission();
      console.log(permission);

      return permission;
    } catch(e) {
      console.log(e);
    }
  }

  async getPermission():Promise<void> {
    try {
      this.speechRecognition.requestPermission();
    } catch(e) {
      console.log(e);
    }
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
