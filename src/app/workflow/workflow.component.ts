import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface serverFolders {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss'],
})
export class WorkflowComponent implements OnInit {
  firstFormGroup: any = FormGroup;
  secondFormGroup: any = FormGroup;
  isEditable = true;

  constructor(private _formBuilder: FormBuilder) {}
  serverFolders: serverFolders[] = [
    { value: 'Folder-0', viewValue: 'Main' },
    { value: 'Folder-1', viewValue: 'Folder-1' },
    { value: 'Folder-2', viewValue: 'Folder-2' },
    { value: 'Folder-3', viewValue: 'Folder-3' },
  ];
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      WorkflowName: ['', Validators.required],
      FolderName: [''],
      serverFolder: [this.serverFolders[0].value],
    });
    this.secondFormGroup = this._formBuilder.group({
      WorkflowDefinition: ['', Validators.required],
    });
  }

}