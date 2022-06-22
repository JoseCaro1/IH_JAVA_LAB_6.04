import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-alt-one-method',
  templateUrl: './lab-alt-one-method.component.html',
  styleUrls: ['./lab-alt-one-method.component.css']
})
export class LabAltOneMethodComponent implements OnInit {

  backFirst:string; 
  isColorblind:boolean;

  firstBg:string;
  firstColor:string;
  secondBg:string;
  secondColor:string;
  thirdBg:string;
  thirdColor:string;
  
  constructor() {
    this.backFirst=""
    this.firstBg="#026969";
    this.secondBg="#97040D";
    this.thirdBg="#B300A6"
    this.firstColor="#A61F6A"
    this.secondColor="#005A00"
    this.thirdColor="#A63D00"
    this.isColorblind=false;
   }

  ngOnInit(): void {
  }


 
  swapElement(element:HTMLDivElement) :void {
    this.backFirst=element.style.backgroundColor
    element.style.backgroundColor=element.style.color
    element.style.color=this.backFirst
  }
 
  swap():void {
      this.isColorblind = !this.isColorblind;
      if(this.isColorblind) {
        this.firstBg="red";
        this.secondBg="blue";
        this.thirdBg="black"
        this.firstColor="white"
        this.secondColor="white"
        this.thirdColor="white"
      } else {
        this.firstBg="#026969";
        this.secondBg="#97040D";
        this.thirdBg="#B300A6"
        this.firstColor="#A61F6A"
        this.secondColor="#005A00"
        this.thirdColor="#A63D00"
      }
  }

}
