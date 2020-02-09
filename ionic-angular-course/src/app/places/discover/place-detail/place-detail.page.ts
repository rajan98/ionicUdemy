import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.get('placeId')) {
        this.navCtrl.navigateBack("/places/tabs/discover");
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    })
  }

  onBookPlace() {
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place }
    }).then(modelEl => {
      modelEl.present();
      return modelEl.onDidDismiss();
    }).then(resultData =>{
      console.log(resultData.data, resultData.role);
      if(resultData.role === 'confirmed'){
        console.log('Booked');
      }
    });
  }

}
