import { Component, OnInit } from "@angular/core";
import { IFooterIcons } from "../interface/search.interface";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent {
  categoriesData: string[][] = [
    ["Graphics", "PSDs", "Icons", "Templates", "Themese"],
    ["Addons", "Fonts", "Textures", "Patterns", "Backgrounds"],
    ["Buttons", "Form", "Gui", "Navigation", "UI kits"],
    ["Infographics", "Graphs", "Logos", "Vectors", "Business Cards"],
  ];

  copyRightLinks: string[] = [
    "Affiliates",
    "Contributors",
    "Press / Media",
    "Careers",
    "About",
    "Contact",
  ];

  copyRightIcons: IFooterIcons[] = [
    { iconClass: "fa-brands fa-facebook icon", iconLink: "#Facebook" },
    { iconClass: "fa-brands fa-twitter-square icon", iconLink: "#Twitter" },
    { iconClass: "fa-brands fa-google-plus-g icon", iconLink: "#Google+" },
    { iconClass: "fa-solid fa-rss icon", iconLink: "#Feed" },
  ];
}
