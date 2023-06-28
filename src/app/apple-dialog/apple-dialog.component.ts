import {AfterViewInit, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Apple} from "../interfaces/apple.interface";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
    selector: 'apple-dialog',
    templateUrl: './apple-dialog.component.html',
    styleUrls: ['./apple-dialog.component.css']
})
export class AppleDialogComponent implements AfterViewInit {

    form: FormGroup;

    apple:Apple;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<AppleDialogComponent>,
        @Inject(MAT_DIALOG_DATA) apple:Apple) {

        this.apple = apple;

        this.form = fb.group({
            color: [apple.color, Validators.required],
            sizeCm: [apple.sizeCm, Validators.required],
            isBad: [apple.isBad,Validators.required]
        });

    }

    ngAfterViewInit() {

    }

    save() {

      const changes = this.form.value;

    }

    close() {
        this.dialogRef.close();
    }

}