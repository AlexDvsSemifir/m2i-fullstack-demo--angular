import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  users: any = [
    {
      nom: "Norris",
      prenom: "Chuck",
      email: "chuck.norris@dieu.fr",
      telephone: "0666666666",
      entreprise: "GOD & Cie"
    },
]

  userForm: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telephone: ['', [Validators.required, Validators.minLength(10)]],
    entreprise: ['', [Validators.required, Validators.minLength(2)]]
  })

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  private adduser(): void {
    this.users.push(this.userForm.value)
    this.userForm.reset()
    this.submitted = false;
    console.log(this.userForm.controls)
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.userForm.valid) {
      this.adduser();
    } else {
      console.log("Formulaire invalide");
    }
  }

  public get form() {
    return this.userForm.controls;
  }

}
