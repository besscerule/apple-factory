import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Apple} from "../interfaces/apple.interface";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { APPLE_COLORS } from '../constants';
import { ApplesService } from '../services/apples.service';
import { LoadingService } from '../loading/loading.service';

@Component({
    selector: 'apple-dialog',
    templateUrl: './apple-dialog.component.html',
    styleUrls: ['./apple-dialog.component.css'],
    providers: [
        LoadingService
    ]
})
export class AppleDialogComponent {

    form: FormGroup;
    colors = APPLE_COLORS
    apple:Apple;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<AppleDialogComponent>,
        @Inject(MAT_DIALOG_DATA) apple:Apple,
        private applesService: ApplesService) {

        this.apple = apple;

        this.form = this.fb.group({
            color: [apple.color, Validators.required],
            sizeCm: [apple.sizeCm, Validators.required]
        });

    }

    save() {
        const changes = this.form.value
        this.applesService.saveApple(this.apple.id, changes).subscribe(
            (val: any) => {
                this.dialogRef.close(val)
            }
        )
    }

    close() {
        this.dialogRef.close();
    }
}