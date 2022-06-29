import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder-liste-courses',
  templateUrl: './formbuilder-liste-courses.component.html',
  styleUrls: ['./formbuilder-liste-courses.component.scss']
})
export class FormbuilderListeCoursesComponent implements OnInit {

  articles: any[] = []

  article: FormGroup = this.formBuilder.group({
    designation: ['', Validators.required],
    price: ['', Validators.required]
  })

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  private addArticle(): void {
    this.articles.push(this.article.value)
    this.article.reset()
    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.article.valid) {
      this.addArticle()
    } else {
      console.log('Formulaire invalide')
    }

  }

  get totalPrice(): number {
    // return this.articles.reduce((total, article) => total + article.price, 0)
    let total = 0
    for (let article of this.articles) {
      total += article.price
    }
    return total
  }

  get form() {
    return this.article.controls
  }

}
