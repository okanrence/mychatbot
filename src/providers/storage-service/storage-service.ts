import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the StorageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageServiceProvider {

  constructor(private storage: Storage) {
    console.log('Hello StorageServiceProvider Provider');
  }

   SetValue(key:any, value:any){
    this.storage.set(key, value)
    .then(
      () => console.log('Stored item! ' + key),
      error => console.error('Error storing item', error)
    );

 // return  this.storage.set(key, value)
   
  }


  GetValue(key: string): Promise<any> {
    return this.storage.get(key);
  }

 
}
