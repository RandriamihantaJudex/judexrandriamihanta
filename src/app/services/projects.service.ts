import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {



  getAllProject(): Project[] {
    return [
      {
        title: 'PADAWAN',
        image: '../../assets/images/padawan.png',
        link: { github: 'https://github.com/RandriamihantaJudex/PADAWAN_PROJECT.git', web: 'https://padawan-two.vercel.app/' },
        description: 'Padawan is a web platform that connects students with professionals to create mentorship opportunities, where professionals offer advice and guidance to help students progress in their academic and professional paths.',
        objectives: [
          "Facilitate students' integration into the professional world.",
          "Help students learn best practices in the workplace.",
          "Enable experienced professionals to mentor the next generation.",
          "Promote the digital sector and its opportunities."
        ],
        images: ['../../assets/images/padawan/padawan1.png',
          '../../assets/images/padawan/padawan2.png',
          '../../assets/images/padawan/padawan3.png',
          '../../assets/images/padawan/padawan4.png',
          '../../assets/images/padawan/padawan5.png',
        ],
        technology: [{nom:'React',image:'../../assets/images/react.svg'},{nom:'Tailwind Css',image:'../../assets/images/tailwind.svg'}],
        anectodes: 'Aucune Actuellement',
        favorite: true
      },
      {
        title: 'BATMAN SHOP',
        image: '../../assets/images/BATMAN/batman1.PNG',
        link: { github: 'https://github.com/RandriamihantaJudex/SAYNA-REACTJS-BATMANREACT', web: 'https://batmanshop.vercel.app/' },
        description: "The front-end development of an e-commerce website focused on the DC universe, specifically Batman, created during my training at Sayna.",
        objectives: ['Master React JS in depth','Practice with the routing system in React.'],
        images: ['../../assets/images/BATMAN/batman2.PNG','../../assets/images/BATMAN/batman3.PNG','../../assets/images/BATMAN/batman4.PNG','../../assets/images/BATMAN/batman5.PNG',],
        technology: [{nom:'React',image:'../../assets/images/react.svg'}],
        anectodes: 'Aucune Actuellement',
        favorite: true
      },
      {
        title: 'MY PORTFOLIO',
        image: '../../assets/images/portfolio/portfolio1.png',
        link: { github: 'https://github.com/RandriamihantaJudex/PORTFOLIO.git', web:'https://judexrandriamihanta.vercel.app/' },
        description: 'This site is my personal platform where I showcase all my work and provide some information about myself. I also welcome anyone interested in contacting me.',
        objectives: ['Showcase the projects I have completed.','Establish an online presence.','Centralize information about myself that may be useful to others.','Facilitate collaboration opportunities.'],
        images: ['../../assets/images/portfolio/portfolio1.png',
          '../../assets/images/portfolio/portfolio2.png',
          '../../assets/images/portfolio/portfolio3.png',
          '../../assets/images/portfolio/portfolio4.png',
          '../../assets/images/portfolio/portfolio5.png',
          '../../assets/images/portfolio/portfolio6.png',
          '../../assets/images/portfolio/portfolio7.png'
        ],
        technology: [{nom:'Angular',image:'../../assets/images/angular.svg'},{nom:'Tailwind Css',image:'../../assets/images/tailwind.svg'},{nom:'Splidejs',image:'../../assets/images/splide.svg'},{nom:'Lottiefiles',image:'../../assets/images/lottiefiles.svg'}],
        anectodes: 'Aucune Actuellement',
        favorite: true
      },
      
      
      {
        title: 'PORTFOLIO UI',
        image: '../../assets/images/UI/figma.PNG',
        link: { github: '', web: 'https://www.behance.net/gallery/210134013/design-ui-portfolio' },
        description: "The UI side of my portfolio designed on Figma, which includes the wireframes, the design system, and all the pages that I personally designed.",
        objectives: ['Bring a unique identity to my portfolio.','Prove my design skills.'],
        images: ['../../assets/images/UI/figma.PNG'],
        technology: [{nom:'Figma',image:'../../assets/images/truefigma.png'}],
        anectodes: 'Aucune Actuellement',
        favorite: false
      }
    ]
  }


  getFavoriteProjects(): Project[] {
    let favorites = this.getAllProject().filter(fav => fav.favorite === true)
    return favorites
  }

  getProject(title: string): Project | undefined {
    let projectFind: Project | undefined = this.getAllProject().find(index => index.title === title)
    if (projectFind) {
      return projectFind
    }
    return undefined
  }

}
