import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var $: any;
declare var anime: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  animacionDeColorEnScroll:any;
  headerActivo:boolean = false;
  altoDeHeader:Number = 70;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    /*if(!this.animacionDeColorEnScroll){
      this.animacionDeColorEnScroll = anime({
        targets: 'header',
        backgroundColor: '#000',
        duration: 1000,
        easing: 'easeInOutQuad',
        autoplay: false
      });
    }*/

    $(window).on("scroll", () => {
      if($(window).scrollTop() > this.altoDeHeader) {
        if(!$("header").hasClass("header-active")){
          $("header").addClass("header-active");
          $("header").removeClass("header-no-active");

          console.log("activo 1");
        }else{
          console.log("no-activo 1");
        }
      } else {
        if($("header").hasClass("header-active")){
          $("header").addClass("header-no-active");
          $("header").removeClass("header-active");

          console.log("no-activo 2");
        }else{
          console.log("activo 1");
        }
      }
    });
    
  }
  
}
