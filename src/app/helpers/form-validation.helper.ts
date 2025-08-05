import { AbstractControl, FormGroup } from '@angular/forms';

export class FormValidation {
  static validationMessages: { [key: string]: string } = {
    'name.required': 'Name is required!',
    'name.minlength': 'Name must be at least 2 characters.',
    'email.required': 'Email is required.',
    'email.email': 'Email must be a valid email address.',
    'message.required': 'Message is required.',
    'message.minlength': 'Message must be at least 10 characters.',
  };

  static getFirstError(
    form: FormGroup,
    field: string,
    submitted: boolean
  ): string | null {
    const control: AbstractControl | null = form.get(field);
    if (!control || !control.errors || !submitted) return null;

    for (const errorKey in control.errors) {
      const messageKey = `${field}.${errorKey}`;
      if (this.validationMessages[messageKey]) {
        return this.validationMessages[messageKey];
      }
    }

    return null;
  }
}
