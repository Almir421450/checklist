import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Category } from '../_models/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  public editableCategory!: Category;
  public actionName: string = 'Editar';

  constructor(private dialogRef: MatDialogRef<CategoryEditComponent>, @Inject(MAT_DIALOG_DATA) dialogData:any) {

    if(dialogData.editableCategory != null){
      this.editableCategory = dialogData.editableCategory;
    }
    if(dialogData.actionName != null){
      this.actionName = dialogData.actionName;
    }
   }

  ngOnInit(): void {
  }

  public closeModalWindow($event: any){
    //Todo: handle action - save/cancel.
    if($event != null) this.dialogRef.close($event);
  }

}
