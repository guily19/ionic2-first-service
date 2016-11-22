import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestProvider } from '../../providers/test-provider';

/*
  Generated class for the PageTwo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page-two',
  templateUrl: 'page-two.html'
})
export class PageTwoPage {

  constructor(public navCtrl: NavController, public testProvider: TestProvider) {}

  changeMessage(){
        this.testProvider.setMessage("Page two rocks!");
    }

}
