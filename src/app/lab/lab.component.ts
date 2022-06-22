import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {


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


  swapFirst():void {
    this.backFirst=this.firstBg
    this.firstBg=this.firstColor
    this.firstColor=this.backFirst;
  }
  swapSecond() :void {
    this.backFirst=this.secondBg
    this.secondBg=this.secondColor
    this.secondColor=this.backFirst;
  }
  swapThird() : void {
    this.backFirst=this.thirdBg
    this.thirdBg=this.thirdColor
    this.thirdColor=this.backFirst;
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
