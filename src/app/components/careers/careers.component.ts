import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'], 
    
})
export class CareersComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder,private elementRef:ElementRef) { }

  ngOnInit() {
    this.form = this.fb.group({
      fullName: ['', [,Validators.minLength(3),Validators.pattern('^[a-zA-Z ]+$'),Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      currentCompany: [''],
      portfolioURL: ['', [Validators.required, Validators.pattern('^https?://.*$')]],
      linkedinURL: ['', [Validators.required, Validators.pattern('^https?://.*$')]],
      additionalInfo: [''],
      resume: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.form.valid) {
      window.confirm('submitting an application successfully');
      this.form.reset()
    } else {
      this.markFormGroupTouched(this.form);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  scrollToForm() {
    const formElement = this.elementRef.nativeElement.querySelector('#form');
    formElement.scrollIntoView({ behavior: 'smooth' });
  }

}
