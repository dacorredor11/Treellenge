import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { GoogleCloudVisionService } from 'src/app/google-cloud-vision-service.service';
import { AlertController } from '@ionic/angular';
// imports necesarios


@Component({
  selector: 'app-daily-challenge',
  templateUrl: './daily-challenge.page.html',
  styleUrls: ['./daily-challenge.page.scss'],
})
export class DailyChallengePage {
  items: any = [];
  good_job: boolean
  jsonResponse: string;
  constructor(private camera: Camera,
              private alertController: AlertController,
              private vision: GoogleCloudVisionService) {
  }

  saveResults(imageData, results) {
    this.good_job = false;
    console.log(imageData);
    console.log(results);
    this.items.push({ imageData, results});
    if (results[0].labelAnnotations[0].description === "Tree" ||
    results[0].labelAnnotations[0].description === "Houseplant" ||
    results[0].labelAnnotations[0].description === "Plant" ||
    results[0].labelAnnotations[0].description === "Flower" )
    {
      this.good_job = true;
    }
  }
  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 500,
      targetWidth: 500,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.vision.getLabels(imageData).subscribe((result: any) => {

        this.saveResults(imageData, result.responses);
      }, err => {
        this.presentAlert('getLabels', err);
      });
    }, err => {
      this.presentAlert('Camera', err);
    });
  }


  async presentAlert(subHeader, message) {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
  reload(){
    window.location.reload();
  }
}
