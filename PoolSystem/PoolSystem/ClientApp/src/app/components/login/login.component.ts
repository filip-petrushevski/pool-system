import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  invalidInfo = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private apiService: ApiService,
    private router: Router
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }

    const user: User = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };

    this.loading = true;

    this.authenticationService.login(user)
    .pipe(first())
    .subscribe(
        data => {
          this.loading = false;
          this.router.navigate(['/home']);
        },
        error => {
            this.loading = false;
            if (error.status === 400) {
              this.invalidInfo = true;
            }
            console.log(error);
        });

  }

}
