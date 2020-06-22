import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  btnTxt :string = "Start Bot";
  looping: boolean = false;
  textArea: string = "=======SniperBot=======";
  i: number = 0;

  constructor(private firebase:FirebaseService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.btnTxt == "Start Bot") {
      this.btnTxt = "Stop Bot";
      this.looping = true;
    } else {
      this.btnTxt = "Start Bot";
      this.looping = false;
    }

    while (this.looping) {
      this.i++;
      this.textArea += "\nLooping "+this.i+" times";
    }

  }

}
