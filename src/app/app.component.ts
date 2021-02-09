import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  celcius: any;
  farenheit: any;

  ngOnInit() {}
  controlTemp() {
    this.farenheit = (this.celcius * 9.0) / 5.0 + 32;
    console.log("calling controlTemp");
  }
  controlTempCel() {
    this.celcius = ((this.farenheit - 32) * 5.0) / 9.0;
    console.log("calling controlTempCel");
  }
}
