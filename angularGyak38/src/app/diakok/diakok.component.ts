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

  private keresettNev!: string;

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
  
  public get KeresettNev(): string {
    return this.keresettNev;
  }

  public set KeresettNev(v: string) {
    this.keresettNev = v;
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


  public DiakKeres(): void {
    let nev = this.keresettNev;
    let index = this.Diakok.findIndex(diak => diak.nev == nev);
    if (nev != "") {
        if (index >= 0) {
          document.getElementById("adat")!.innerHTML = "A keresett diák adatai (név, magasság, súly): "+Object.values(this.diakok[index]).join(" ");
        } else {
          alert("Nem található ilyen nevű diák");
        }
    } else {
      alert("Kérem adjon meg egy nevet")
    }
  }

}

export interface Diak {
  nev:string;
  magassag:number;
  suly:number;
}
