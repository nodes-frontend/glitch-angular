import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public version: string = '1.0';
  
  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    console.log('poo')
  }
  
}
