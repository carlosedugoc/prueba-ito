import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  user = new FormControl({value: '', disabled: true});
  email = new FormControl({value: '', disabled: true});
  name = new FormControl({value: '', disabled: true});
  surname = new FormControl({value: '', disabled: true});

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<ViewComponent>) { }

  ngOnInit(): void {
    this.user.setValue(this.data.user)
    this.email.setValue(this.data.email)
    this.name.setValue(this.data.name)
    this.surname.setValue(this.data.surname)
  }

  close() {
    this.dialogRef.close()
  }

  getErrorMessage(control: string) {
    if (this[control].hasError('required')) {
      return `El campo ${control} es requerido`;
    }

    if (control === 'email' && this[control].hasError('email')) {
        return `El email no es válido`;
    }
  }

}
