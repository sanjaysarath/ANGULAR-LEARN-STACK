import { Component, input } from '@angular/core';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrl: './myapp.component.scss'
})
export class InterpolationComponent {
  name:string='';
  bookId:number=24;
  bookName:string="APJ";
  author:string="sarath";
  btn:boolean=false;
  constructor(){}
  ngOnInit():void{ 
    setTimeout(()=>{
    this.btn=true;
     },2000);
   

}

public Clickbtn(){
  setTimeout(()=>{
    alert("Kurray");
   },2000)
 
}
logdata(){
  console.log('name:',this.name);
}


}

