import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  categoriesData: string[][] = [
    ["Graphics","PSDs","Icons","Templates","Themese",],
    ["Addons","Fonts","Textures","Patterns","Backgrounds",],
    ["Buttons","Form","Gui","Navigation","UI kits",],
    ["Infographics","Graphs","Logos","Vectors","Business Cards",]
  ];

}
