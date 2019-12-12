import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: ["https://www.mrbckc.org/", "https://www.ubcfayetteville.org/"]
  constructor() { }

  ngOnInit() {
  }

}
