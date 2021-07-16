import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string; 
  //allows for feilds in the html tag but are not used until used in the compontents html
  //variables SET in the used html tag in another component, but USED in the self compontent
  @Input() color!: string;

  @Output() btnClick = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
