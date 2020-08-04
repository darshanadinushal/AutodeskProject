import { ValidatorFn, FormControl } from '@angular/forms';


export const TrimValidator: ValidatorFn = (control: FormControl) => {
    if (!control.value.trim()) {
      return {
        'trimError': { value: 'control has leading whitespace' }
      };
    }
 
    return null;
  };