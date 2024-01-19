import { Component,OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule,FormsModule,MatInputModule,MatButtonModule,MatFormFieldModule,MatIconModule,ReactiveFormsModule,
    CommonModule,MatDialogModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  faLaptopCode = faLaptopCode;
  constructor(
    private builder:FormBuilder,
    private dialog: MatDialog
  ){}
  form: FormGroup = this.builder.group({
    from_name: new FormControl('', [Validators.required]),
    reply_to: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  
  ngOnInit(){
    this.form = this.builder.group({
      from_name: new FormControl('', [Validators.required]),
      reply_to: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    })
  }
  async onSubmit(){
    emailjs.init("ZuhXsgdPwtJzQ4V-o");
    let response = emailjs.send("service_2eyntu2","template_ipuvkls",{
      from_name: this.form.value.from_name,
      message: this.form.value.message,
      reply_to: this.form.value.reply_to,
      });
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '800px',
        data: { message: 'Muchas gracias por su contacto, será respondido lo antes posible' },
        position: { top: '20%', left: '40%' },
        panelClass: 'custom-dialog-container',
      });
      dialogRef.afterClosed().subscribe(() => {
        this.form.reset();
      });
  }
}

