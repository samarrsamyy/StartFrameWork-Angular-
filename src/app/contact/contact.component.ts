import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { Iform } from '../iform';
import { InputComponent } from "../input/input.component";



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TitleComponent, InputComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  inputList: Iform[]=[
    {name: 'userName' , type: 'text'},
    {name: 'userAge' , type: 'text'},
    {name: 'userEmail' , type: 'email'},
    {name: 'userPassword' , type: 'text'},
  ]


 

}
