import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  fg: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  sendLink() {
    if(this.fg.valid)
      alert("Reset password link is sent to your email!")
  }
}
