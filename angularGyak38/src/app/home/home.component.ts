import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private author:string = "NB";
  private sayHiMessage:string = "Üdvözlöm az Angular gyakorló oldalon :) !";
  private taskMessage:string = "Kérem válasszon a fenti feladatok közül!";

  public get Author(): string {
    return this.author;
  }

  public get SayHiMessage(): string {
    return this.sayHiMessage;
  }

  public get TaskMessage(): string {
    return this.taskMessage;
  }
}
