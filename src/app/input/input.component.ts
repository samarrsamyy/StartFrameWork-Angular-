import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Iform } from '../iform';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @ViewChild('myLabel') myLabel!:ElementRef
  @ViewChild('myInput') myInput!:ElementRef
  


  @Input({required: true}) input!:Iform;


  onFireEvent():void{
    if( this.myInput.nativeElement.value != ""){
   this.myLabel.nativeElement.classList.add('top-0')
    }
    else{
      this.myLabel.nativeElement.classList.remove('top-0')


    }
   
    }

  }

