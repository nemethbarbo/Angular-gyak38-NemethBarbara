import { Component } from '@angular/core';

@Component({
  selector: 'app-diakok',
  templateUrl: './diakok.component.html',
  styleUrls: ['./diakok.component.css']
})

export class DiakokComponent {
  private diakAtlagMagassag:number = 0.0;

  private maxDiakMagassag: number = 0.0;

  private minDiakSuly: number = 0.0;

  private diakElement: Diak = {
    nev: "Teszt Elek",
    magassag: 180,
    suly: 80,
  }

  private diakok: Diak[] = [
    {
      nev: "Teszt Elek",
      magassag: 180,
      suly: 80,
    },
    {
      nev: "Gipsz Jakab",
      magassag: 175,
      suly: 81,
    },
    {
      nev: "Kovács Kázmér",
      magassag: 190,
      suly: 99,
    },
    {
      nev: "Liszt Elek",
      magassag: 169,
      suly: 70,
    },
    {
      nev: "Nap Pali",
      magassag: 190,
      suly: 89,
    },
    {
      nev: "Kukor Ica",
      magassag: 160,
      suly: 70,
    },
  ]

  public get Diakok(): Diak[]{
    return this.diakok;
  }

  public get DiakElement() : Diak {
    return this.diakElement;
  }

  public get MaxDiakMagassag():number{
    let max = this.Diakok[0].magassag;  
    this.Diakok.forEach(diak => {
      if (diak.magassag>max) {
        max = diak.magassag;
      }
    });
    return max;
  }

  public get DiakAtlagMagassag(): number {
    let sum = 0.0;
    this.Diakok.forEach(diak => {
      sum += diak.magassag;
    });
    return sum/this.diakok.length;
  }

  public get MinDiakSuly():number{
    let min = this.Diakok[0].suly;  
    this.Diakok.forEach(diak => {
      if (diak.suly<min) {
        min = diak.suly;
      }
    });
    return min;
  }


  /*public DiakKeres(nev: string): Diak | undefined {
    for (let diak of this.diakok) {
      if (diak.nev.toLowerCase() === nev.toLowerCase()) {
        console.log(diak);
        return diak;
      }
    }
    return undefined;
  }*/
}

export interface Diak {
  nev:string;
  magassag:number;
  suly:number;
}
