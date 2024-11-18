import { Component, computed, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { faSun,faBars,faMoon,faClose ,faDownload,faHome,faLayerGroup,faChevronDown,faPaperPlane,faStar as fastarsolid} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconMenuComponent } from '../icon-menu/icon-menu.component';
import { IconMenuReverseComponent } from '../icon-menu-reverse/icon-menu-reverse.component';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { IconMenuReseauComponent } from '../icon-menu-reseau/icon-menu-reseau.component';
import { MenuService } from '../../services/menu.service';
import { AnimationMenuComponent } from '../animation-menu/animation-menu.component';
import { AnimationMenuTwoComponent } from '../animation-menu-two/animation-menu-two.component';
import { RouterLink } from '@angular/router';
import { StarComponent } from '../star/star.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-slider-menu',
  standalone: true,
  imports: [
    FontAwesomeModule,
    IconMenuComponent,
    IconMenuReverseComponent,
    IconMenuReseauComponent,
    AnimationMenuComponent,
    AnimationMenuTwoComponent,
    RouterLink,
    StarComponent,
    CommonModule
  ],
  templateUrl: './slider-menu.component.html',
  styleUrl: './slider-menu.component.css'
})
export class SliderMenuComponent {

@ViewChild('menuSlider') menuSlider!:ElementRef;
 
starActive=signal(0)
starNonActive= computed( ()=>{
  return 5 - this.starActive();
} )

setactive(number:number){

  this.starActive.set(this.starActive() + number+1)
}

seeStarsChild(number:number){
  this.starActive.set(number+1);
}




// cree des tableau pour pouvoir utiliser la directive NGfor
get arrayStarActive() {
  return Array(this.starActive()).fill(0); 
}
get arrayStarNonActive() {
  return Array(this.starNonActive()).fill(0); 
}


etatMenu=inject(MenuService)
  
// ICONS  
sun =faSun
moon= faMoon
burger=faBars
close = faClose
download=faDownload
home=faHome
projects =faLayerGroup
lien=faChevronDown
send=faPaperPlane
star=faStar
fastarsolid =fastarsolid;


closeIt(){
  this.etatMenu.chageMenuState()
}

}
