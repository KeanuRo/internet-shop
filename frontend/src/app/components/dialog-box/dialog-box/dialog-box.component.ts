import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    SSD: new FormControl(''),
    chip: new FormControl(''),
    memory: new FormControl(''),
    display: new FormControl(''),
    year: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.data  = {
      title: this.myForm.value.title,
      price: this.myForm.value.price,
      image: "assets/apple-notebook.jpg",
      configure: {
        chip: this.myForm.value.chip,
        SSD: this.myForm.value.SSD,
        memory: this.myForm.value.memory,
        display: this.myForm.value.display,
        year: this.myForm.value.year,
      },
    };

    console.log(this.data);
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
  }
}
