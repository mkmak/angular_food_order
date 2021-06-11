import { AbstractControl, ValidationErrors } from "@angular/forms";

export class MustMatchValidator {
    static validate(control: AbstractControl): ValidationErrors | null {
        return control.get('password')?.value === control.get('cpassword')?.value ? null : {mismatch: true};
    }
}