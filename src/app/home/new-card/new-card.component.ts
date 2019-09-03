import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActiveCardsService } from '../../state/active-cards.service';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
})
export class NewCardComponent {
  title: string;
  description: string;
  photo: SafeResourceUrl;

  constructor(
    private modalCtrl: ModalController,
    private activeCardsService: ActiveCardsService,
    private sanitizer: DomSanitizer,
    private angularFireStorage: AngularFireStorage
  ) { }

  async takePicture(): Promise<void> {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    const filename = new Date().getTime() + '.jpg';
    this.angularFireStorage.ref(filename).putString(image.base64String, 'base64').then(() => {
       this.angularFireStorage.ref(filename).getDownloadURL().toPromise().then(photoUrl => this.photo = photoUrl);
    });
  }

  dismiss(): void {
    this.modalCtrl.dismiss();
  }

  save(): void {
    this.activeCardsService.add({
      id: Math.random() + '',
      title: this.title,
      description: this.description,
      clicks: 0,
      imageSrc: this.photo
    });
    this.dismiss();
  }
}
