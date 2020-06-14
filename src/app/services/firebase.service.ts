import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  addData() {
    let data = {
      symbol: 'TEST1',
      value: 1.111,
      datetime: Date.now(),
    };
    this.firestore.collection("LiveData").add(data);
  }
}
