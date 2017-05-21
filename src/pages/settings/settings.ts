import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PoloniexService } from '../../providers/poloniexService';

@Component({
  selector: 'page-contact',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  constructor(private storage:Storage, private poloniexService: PoloniexService){
    console.log('settings called');
  }
  generate(){
    console.log('generate keys');
    this.storage.ready().then(() => {
       // set a key/value
       this.storage.set('apiKey', 'QS2AWC3G-HE8RPLMR-IIZSUNPW-DE7PEOSU');
       this.storage.set('secretKey', '91b3aeb0ca7165847937199640e72c192386ce59bee3930cf838d267517ff9259a20a2078b3c6a8cf988d625f2ec8ae4ce905e29530965bf77571118bfbb0371');
       this.storage.set('pin','0011');
     });
     this.poloniexService.grabKeys();
  }
  remove(){
    console.log('remove keys');
    this.storage.ready().then(() => {
       // remove a key/value
       this.storage.remove('apiKey');
       this.storage.remove('secretKey');
       this.storage.remove('pin');
     });
     this.poloniexService.grabKeys();
  }
}
