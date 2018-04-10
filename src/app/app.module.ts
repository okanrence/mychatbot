import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Chat } from '../pages/chat/chat';
import { ListPage } from '../pages/list/list';
import { ChatViewPage } from '../pages/chat-view/chat-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TextToSpeech } from '@ionic-native/text-to-speech';

import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ChatService } from '../providers/chat-service/chat-service';
import { HttpClientModule } from "@angular/common/http";
import { PipesModule } from "../pipes/pipes.module";
//import { RelativeTime } from "../pipes/relative-time/relative-time";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ChatViewPage,Chat
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpClientModule,PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ChatViewPage, Chat
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatService,
  ]
})
export class AppModule {}
