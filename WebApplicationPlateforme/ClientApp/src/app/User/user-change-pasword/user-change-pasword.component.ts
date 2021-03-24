import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { UserDetail } from '../../shared/Models/User/user-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-change-pasword',
  templateUrl: './user-change-pasword.component.html',
  styleUrls: ['./user-change-pasword.component.css']
})
export class UserChangePaswordComponent implements OnInit {

  constructor(private userService: UserServiceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
   this.getUserConnected();
  }


  // Get User Connected

  UserIdConnected: string;
  password:string
  getUserConnected() {

    this.userService.getUserProfileObservable().subscribe(res => {
      this.userdetail =res;


    })
  }


  //Change Pasword

  userdetail: UserDetail = new UserDetail();
  

  onSubmit() {

    
    this.userService.ChangePassword(this.userdetail).subscribe(res => {
      this.toastr.success('تم إعادة تعيين كلمة المرور الخاصة بك', 'نجاح');
    })
  }
}
