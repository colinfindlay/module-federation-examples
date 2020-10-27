import { Component, OnInit } from "@angular/core";
import { MdmfNglibService } from 'projects/mdmf-nglib/src/public-api';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  constructor(private svc: MdmfNglibService) {}

  ngOnInit(): void {
    let count = this.svc.increment();
    console.log("Singleton Service Invocation Count: " + count);
  }
}
