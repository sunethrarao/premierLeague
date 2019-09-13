import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { User } from "./user";

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) {}

  login(user: User) {
    if (user.email !== "" && user.password !== "") {
      //to get all the signed up users from localStorage
      let dataArr = JSON.parse(localStorage.getItem("plUsers")) || [];

      //check if theere is any signed up user with the given email and password
      //if exits then get his details and store in currentUser
      let currentUser = dataArr.filter(u => {
        return u.password == user.password && u.email == user.email;
      });

      if (currentUser[0]) {
        //to  get the user detail from the array and assign again to currentUser
        currentUser = currentUser[0];
        this.router.navigate(["/"]);
        this.loggedIn.next(true);
      } else {
        //if password and email doesn't match
        alert("Invalid Email or Password");
      }
    } else {
      alert("Please Enter Credentials");
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(["/login"]);
  }
}
