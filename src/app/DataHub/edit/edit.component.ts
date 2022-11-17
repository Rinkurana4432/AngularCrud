import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '../data';
import { DataService } from '../data.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  dataFormHub: Data = {
    id: 0,
    name: '',
    mobile: 0,
    email: '',
    courses: '',
    rating: 0
  }
  
  //constructor(actvateRoute:ActivatedRoute,private router:Router,private ds:DataService) { }
  constructor(private route: ActivatedRoute, private router: Router,private ds:DataService) { }
  ngOnInit(): void {

    //this.route.paramMap.subscribe((param)=>{
    //  var id = Number(param.get.('id'));
    //  })

    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getDataById(id);
    })
  }
  getDataById(id: number) {
    this.ds.getDataById(id).subscribe((data) => {
      this.dataFormHub = data;
    })
  }

  update() {
    this.ds.updatedata(this.dataFormHub).subscribe({
      next: (data) => {
        this.router.navigate(["/Datahub/home"])
      },
      error: (err) => {
        console.log(err);
      }

    })
  }
}
