import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private firebase:FirebaseService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.firebase.addData();
  }

}
