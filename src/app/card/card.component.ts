import { Component, Input } from '@angular/core';
import { Image } from '../image';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required:true}) image!:Image

  showImage(src:any , alt:any){
    let outLayer = document.getElementById('outter-layer');
     document.querySelector('.image img')?.setAttribute('src' , src)
     document.querySelector('.image img')?.setAttribute('alt' , alt)
  
      outLayer?.classList.add('d-flex')
      outLayer?.classList.remove('d-none')
      console.log(src)
    }


}
