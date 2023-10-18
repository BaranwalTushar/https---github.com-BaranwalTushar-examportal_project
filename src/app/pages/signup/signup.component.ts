import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UrlSerializer } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService:UserService,private snack:MatSnackBar) {}

  public user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email: '',
    phone: '',

  };

  ngOnInit(): void {
      
  }
  formSubmit(){
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null){
      //alert("User is required!!")
      this.snack.open("username is required !! ","",{
        duration: 3000,
        
      });
      return;
    }

    //addUser: userservice
    this.userService.addUser(this.user).subscribe({
      next:(data:any)=>{console.log(data),
        Swal.fire("Successfully done !!","user id is " + data.id, "success");
        
      },
      error:(err)=>console.log(err),
        
      complete:()=>console.log("completed")
    }
     


    );
  }

  //


}
