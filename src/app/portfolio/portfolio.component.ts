import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { CardComponent } from "../card/card.component";
import { Image } from '../image';



@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TitleComponent, CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imgList : Image[]=[
    { imgSrc: './assets/images/poert1.png' , alt:'wood house'},
    { imgSrc: './assets/images/port2.png' , alt:'piece of cake'},
    { imgSrc: './assets/images/port3.png' , alt:'circus'},
  ]

  

  hideImage(){
    let outLayer = document.getElementById('outter-layer');
    outLayer?.classList.remove('d-flex')
    outLayer?.classList.add('d-none')
  }

}
