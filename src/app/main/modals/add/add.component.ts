import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private mainService: MainService, public dialogRef: MatDialogRef<AddComponent>) { }

  ngOnInit(): void {
  }

  user = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  surname = new FormControl('', [Validators.required]);


  save() {
    this.mainService.setData({
      user: this.user.value,
      email: this.email.value,
      name: this.name.value,
      surname: this.surname.value
    })
  }

  close(){
    this.dialogRef.close()
  }

}
