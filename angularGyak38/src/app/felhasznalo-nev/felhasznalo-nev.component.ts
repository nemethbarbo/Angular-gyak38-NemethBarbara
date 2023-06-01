import { Component } from '@angular/core';

@Component({
  selector: 'app-felhasznalo-nev',
  templateUrl: './felhasznalo-nev.component.html',
  styleUrls: ['./felhasznalo-nev.component.css']
})
export class FelhasznaloNevComponent {
  private felhasznalonev: string = "" ;

  public get Felhasznalonev(): string {
    return this.felhasznalonev;
  }

  public set Felhasznalonev(v: string){
    this.felhasznalonev = v;
  }

  public felhasznalonevEllenoriz(felhasznalonev:string):any {
    let regexFelhasznalonev = /^[a-zA-Z0-9_]{4,15}$/;
    return regexFelhasznalonev.test(felhasznalonev);
  }

  public felhasznalonevMegfeleloE():void{
    if (this.felhasznalonevEllenoriz(this.felhasznalonev)){
      alert("A felhasználónév formátuma megfelelő!");
    } else {
      alert ("A felhasználónév formátuma nem megfelelő (nem tartalmazhat speciális karaktereket csak alulvonást, számot vagy angol karaktert, a hossza minimum 4, maximum 15 karakter lehet!)");
    }
  }
}
