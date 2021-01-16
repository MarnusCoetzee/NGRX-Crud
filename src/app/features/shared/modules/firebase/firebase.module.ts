import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireAnalyticsModule,
  UserTrackingService,
} from '@angular/fire/analytics';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { environment } from '../../../../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireFunctionsModule,
  ],
  exports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
  ],
  providers: [],
})
export class FirebaseModule {}
