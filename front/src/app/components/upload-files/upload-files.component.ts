import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UploadFilesService } from 'src/app/services/upload-files.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css'],
})
export class UploadFilesComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;
  form: FormGroup;

  constructor(
    private uploadService: UploadFilesService,
    public fb: FormBuilder
  ) {
    this.form = this.fb.group({
      numPage: [''],
      cordX: [''],
      cordY: [''],
      avatar: [null],
      image: [null],
    });
  }

  ngOnInit(): void {
    this.getFiles();
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file,
    });
    this.form.get('avatar').updateValueAndValidity();
  }
  uploadFileImage(event) {
    const img = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      image: img,
    });
    this.form.get('image').updateValueAndValidity();
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append('avatar', this.form.get('avatar').value);
    formData.append('image', this.form.get('image').value);
    formData.append('numPage', this.form.get('numPage').value);
    formData.append('cordX', this.form.get('cordX').value);
    formData.append('cordY', this.form.get('cordY').value);
    this.uploadService.upload(formData).subscribe(
      (event: any) => {
        this.getFiles();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  getFiles() {
    this.uploadService.getFiles().subscribe(
      (succes) => {
        this.fileInfos = succes;
        console.log('success :', succes);
      },
      (error) => console.log(error)
    );
  }
}
