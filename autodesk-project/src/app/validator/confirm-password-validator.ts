
import { FormGroup } from '@angular/forms';

export function ConfirmFieldValidator(fieldKey: string, confirmFieldKey: string) {
    return (group: FormGroup): {
        [key: string]: any
    } => {
        const fieldValue = group.controls[fieldKey];
        const confirmFieldValue = group.controls[confirmFieldKey];

        if (confirmFieldValue.errors && !confirmFieldValue.errors.confirmPasswordValidator) {
            return;
          }

        if (fieldValue.value.trim() !== confirmFieldValue.value.trim()) {
            confirmFieldValue.setErrors({ confirmValidator: true });
        } else {
            confirmFieldValue.setErrors(null);
        }
    };
}
