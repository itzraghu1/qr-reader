import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-result',
 	templateUrl: 'result.html',
 })
 export class ResultPage {
 	result:string="";
 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		this.result = this.navParams.get('userParams');
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ResultPage');
 	}

 }
