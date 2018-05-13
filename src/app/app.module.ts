import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Chat } from '../pages/chat/chat';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TextToSpeech } from '@ionic-native/text-to-speech';

import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ChatService } from '../providers/chat-service/chat-service';
import { HttpClientModule } from "@angular/common/http";
import { PipesModule } from "../pipes/pipes.module";
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { HttpModule } from '@angular/http'
import { Device } from '@ionic-native/device';
import { NotificationsServiceProvider } from '../providers/notifications-service/notifications-service';
import { StorageServiceProvider } from '../providers/storage-service/storage-service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Chat
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    PipesModule,
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Chat
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatService,
    HttpServiceProvider,
    Device,
    NotificationsServiceProvider,
    StorageServiceProvider
  ]
})
export class AppModule {}
