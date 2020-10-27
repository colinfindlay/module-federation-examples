import { Component, OnInit } from "@angular/core";
import { MdmfNglibService } from 'projects/mdmf-nglib/src/public-api';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private svc: MdmfNglibService) {}

  ngOnInit(): void {
    let count = this.svc.increment();
    console.log("Singleton Service Invocation Count: " + count);
  }
}
