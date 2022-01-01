import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 form: FormGroup;
 hide: boolean;
 inProgress: boolean;


  constructor(private _fb:FormBuilder ) { 
    this.form = _fb.group({})
    this.hide = true;
    this.inProgress = false;
  }

  ngOnInit(): void {
    this.hide = true;
    console.log(this.hide)
     this. form = this._fb.group
     ({
      username:['', Validators.required],
      password:['', Validators.required],
    })
  }

  submit() {
    console.log(this.form.value)
    this.form.markAllAsTouched()
    if (this.form.valid) {
  
    }
  }

}
