import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patch-dialog',
  templateUrl: './patch-dialog.component.html',
  styleUrls: ['./patch-dialog.component.css']
})
export class PatchDialogComponent implements OnInit {

  _id: string;
  dialogHeader: string;
  dialogBody: string;

  constructor(private dialogRef: MatDialogRef<PatchDialogComponent>, private router: Router,  @Inject(MAT_DIALOG_DATA) data) { 

    this._id = data._id;
    this.dialogHeader = data.dialogHeader;
    this.dialogBody = data.dialogBody;
}

  ngOnInit(): void {
  }


}
