import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';


@Component({
  selector: 'page-tab-profile',
  templateUrl: 'tab-profile.html'
})
export class TabProfilePage {
  user: any = {};

  constructor(
    public authService: AuthService,
    public loadingCtrl: LoadingController
  ) {
    this.user.photoUrl = 'assets/img/noimage.png';
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create();
    loading.present();
    this.authService.currentUser
      .subscribe(user => {
        loading.dismiss();
        this.user = user;
      }, (error)=> {
        loading.dismiss();
        console.log('Error: ' + JSON.stringify(error));
      });
  }

}
