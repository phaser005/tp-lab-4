import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() imgSource!:any;
  @Input() cardTitle!:any;
  @Input() cardParagraph!:any;
  @Input() buttonText!:any;
  @Input() buttonLink!:any;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(){
    this.router.navigateByUrl(this.buttonLink);
  }

}
