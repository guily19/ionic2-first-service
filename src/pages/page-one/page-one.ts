import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestProvider } from '../../providers/test-provider';

/*
  Generated class for the PageOne page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page-one',
  templateUrl: 'page-one.html'
})
export class PageOnePage {

  constructor(public navCtrl: NavController, private testProvider: TestProvider) {}

  changeMessage(){
        this.testProvider.setMessage("Page one rocks!");
    }

}
