import { CategoryService } from './../service/category.service';
import { ChecklistItem } from './../_models/checklist_item';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Category } from '../_models/category';

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})
export class ChecklistFormComponent implements OnInit {

  @Input() public actionName = 'Editar';
  @Input() public checklistItem!: ChecklistItem;
  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild(FormGroupDirective) checklistFormGroupDirective!: FormGroupDirective;

  public categories: Category[] = [];



  public checklistForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public categoryService: CategoryService) { }

  ngOnInit(): void {

    this.categoryService.getAllCategories().subscribe(
      (resp: Category[]) => {
        this.categories = resp;
        this.creatForm();
      }
    );
  }

    private creatForm(){
     this.checklistForm = this.formBuilder.group(
        {
          completed:[this.checklistItem != null ? this.checklistItem.completed : false, Validators.required],
          description: [this.checklistItem != null ? this.checklistItem.description : '' , Validators.required],
          deadLine: [this.checklistItem != null ? new Date (this.checklistItem.deadLine) : new Date() , Validators.required],
          category: [this.checklistItem != null ? this.checklistItem.category : null , Validators.required]
        }
      );

    }




    private clearForm(){
    this.checklistForm.reset();
    this.checklistFormGroupDirective.resetForm();
    }


     public save(){
      this.formCloseEvent.emit(true);
    }

    public cancel(){
     this.formCloseEvent.emit(false);
   }

}
