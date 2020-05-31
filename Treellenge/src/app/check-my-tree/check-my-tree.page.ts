import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-check-my-tree',
  templateUrl: './check-my-tree.page.html',
  styleUrls: ['./check-my-tree.page.scss'],
})

export class CheckMyTreePage implements OnInit {


  constructor(private modalCtrl: ModalController, private cameraPreview: CameraPreview) { }

  ngOnInit() {

    this.cameraPreview.switchCamera();

    let cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    }


    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
      console.log(res)
      },
      (err) => {
      console.log(err)
    });

}

  close(){
    this.modalCtrl.dismiss();
  }

}

