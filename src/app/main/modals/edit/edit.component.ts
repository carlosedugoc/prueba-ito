import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  user = new FormControl('', [Validators.required, Validators.maxLength(20)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  surname = new FormControl('', [Validators.required, Validators.maxLength(100)]);

  constructor(private mainService:MainService,@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<EditComponent>) { }

  save() {
    console.log(this.data)
    this.mainService.updateData({
      user: this.user.value,
      email: this.email.value,
      name: this.name.value,
      surname: this.surname.value
    })
  }

  ngOnInit(): void {
    this.user.setValue(this.data.user)
    this.email.setValue(this.data.email)
    this.name.setValue(this.data.name)
    this.surname.setValue(this.data.surname)
  }

  close() {
    this.dialogRef.close()
  }

}
