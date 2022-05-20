import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  categoriesData = [
    ["Graphics","PSDs","Icons","Templates","Themese",],
    ["Addons","Fonts","Textures","Patterns","Backgrounds",],
    ["Buttons","Form","Gui","Navigation","UI kits",],
    ["Infographics","Graphs","Logos","Vectors","Business Cards",]
  ];
  constructor() { }

  ngOnInit() {  }

}
