import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { ResultPage } from '../result/result';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	scanSub: any;
	constructor(

		public navCtrl: NavController,
		private qrScanner: QRScanner,
		private uniqueDeviceID: UniqueDeviceID
		) {
		
	}
	showCamera() {
		(window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
	}

	hideCamera() {
		(window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
	}

	ionViewWillEnter(){

		// get unique id
		this.uniqueDeviceID.get()
		.then((uuid: any) => console.log(uuid))
		.catch((error: any) => console.log(error));


		this.showCamera();

		this.qrScanner.prepare()
		.then((status: QRScannerStatus) => {
			if (status.authorized) {
				console.log('Camera Permission Given');
				this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
					console.log(text);
					this.hideCamera(); 
					this.navCtrl.push(ResultPage,{'result':text});
					this.qrScanner.hide();
					this.scanSub.unsubscribe(); 
				});
				this.qrScanner.show();
			} else if (status.denied) {
				console.log('Camera permission denied');
			} else {
				console.log('Permission denied for this runtime.');
			}
		})
		.catch((e: any) => console.log('Error is', e));
	}
	ionViewWillLeave(){
		this.hideCamera(); 
	}



}
