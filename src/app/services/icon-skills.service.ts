import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconSkillsService {

  langages: Array<string> = [
    'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/others/html.svg',
    'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/javascript.svg'
    , 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/typescript.svg'
    ,'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/react.svg'
    , 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/angular.svg'
  ]

  styles:Array<string>=[
'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/others/css.svg',
'../../../assets/images/tailwind.svg', 
'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/boostrap.svg' 
]

tools:Array<string>=[
  '../../../assets/images/figma.svg',
  '../../../assets/images/git.svg',
  '../../../assets/images/github.svg',
]

}