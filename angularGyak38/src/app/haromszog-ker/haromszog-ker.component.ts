import { Component } from '@angular/core';

@Component({
  selector: 'app-haromszog-ker',
  templateUrl: './haromszog-ker.component.html',
  styleUrls: ['./haromszog-ker.component.css']
})
export class HaromszogKerComponent {
  private title: string = "Háromszög kerülete";
  private a:number = 1;
  private b:number = 1;
  private c:number = 1;
  
  public get Title() : string {
    return this.title;
  }

  public get A() : number {
    return this.a;
  }
  
  public set A(v: number){
    this.a = v;
  }

  public get B() : number {
    return this.b;
  }
  
  public set B(v: number){
    this.b = v;
  }

  public get C() : number {
    return this.c;
  }
  
  public set C(v: number){
    this.c = v;
  }

  public haromszogKeruletSzamol() : number {
    return this.a + this.b + this.c;
  }

  public haromszogKeruletKiir():void{
    alert("A háromszög kerülete: "+this.haromszogKeruletSzamol());
  }
}
