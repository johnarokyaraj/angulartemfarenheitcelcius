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
    if (this.celcius != "") {
      this.farenheit = (this.celcius * 9.0) / 5.0 + 32;
    } else {
      this.farenheit = "";
    }
    console.log("calling controlTemp");
  }
  controlTempCel() {
    if (this.farenheit != "") {
      this.celcius = ((this.farenheit - 32) * 5.0) / 9.0;
    } else {
      this.celcius = "";
    }
    console.log("calling controlTempCel");
  }
}
