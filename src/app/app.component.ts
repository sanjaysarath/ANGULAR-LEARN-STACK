import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrl: './app.component.scss'
})
export class AppComponent {
   name:string="sarathkumar";
   course:string="angular";
   partner:string="Darwin";
   relation:string="partner in  crime"
   bt:boolean=false;
   constructor(){}
  ngOnInit():void{ 
    setTimeout(() => {
      this.bt=true;
    }, 2000);

   }
   public Clickbt(){
    setTimeout(()=>{
    alert("hai buddy")
    },2000)
   }
}
