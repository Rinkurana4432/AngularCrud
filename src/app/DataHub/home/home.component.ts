import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';
import Swal from 'sweetalert2';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allData: Data[] = [];
  constructor(private ds: DataService) {
    this.get()
  }

  ngOnInit(): void {
  }
  delete(id) {
  
      Swal.fire({
        title: 'Are you sure?',
        text: 'This process is irreversible.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, go ahead.',
        cancelButtonText: 'No, let me think',
      }).then((result) => {
        if (result.value) {
          this.ds.removeDataById(id).subscribe((data) => {})
          Swal.fire('Removed!', 'Product removed successfully.', 'success');
          window.location.reload();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelled', 'Product still in our database.)', 'error');
        }
      });
  

  }
  get() {
    this.ds.getData().subscribe((res) => {
      this.allData = res;
      console.log(this.allData)
    })
  }
}


