import { AfterViewInit, Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from '../../services/projects.service';
import { ProjectComponent } from '../../composant/project/project.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Project } from '../../interfaces/project.interface';
@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [FontAwesomeModule, ProjectComponent, ReactiveFormsModule],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent {
  service = inject(ProjectsService)
  listProject = signal(this.service.getAllProject())
  activeProjectSection =signal("front");

  recherche = new FormGroup({
    searchField: new FormControl('')
  })

  //REFERENCE
  @ViewChild("projectnav") projectnav!: ElementRef;
  @ViewChild("frontendRef") frontend!: ElementRef;
  @ViewChild("backendRef") backend!: ElementRef;
  @ViewChild("otherRef") other!: ElementRef;
  //ICONES  
  search = faSearch
  filter = faSliders


  // METHODES

  //gere l'affichage des projets (front/back/autres) 
  seeOtherProject(element: ElementRef,activeSection:string) {
    let enfant:HTMLDivElement[]=this.projectnav.nativeElement.children;
    const activeClassList : string[] = ["border-[#00b89f]","text-[#00b89f]"]; 
    const nonActiveClassList : string[] = ["border-[#36363615]","dark:border-[#c5c5c59d]","text-[#36363615]", "dark:text-[#c5c5c59d]"];

    Array.from(enfant).forEach((child: HTMLDivElement) => {
      this.removeThoseClasses(child,activeClassList)
      this.addThoseClasses(child,nonActiveClassList)
    });

    this.removeThoseClasses(element,nonActiveClassList)
    this.addThoseClasses(element,activeClassList)
    this.activeProjectSection.set(activeSection)
  }

  removeThoseClasses(div:HTMLDivElement | ElementRef,listToRemove:string[]):void{
    Array.from(listToRemove).forEach(element=>{
      div instanceof HTMLDivElement?div.classList.remove(element):div.nativeElement.classList.remove(element);
    })
  }

  addThoseClasses(div:HTMLDivElement | ElementRef,listToAdd:string[]):void{
    Array.from(listToAdd).forEach(element=>{
      div instanceof HTMLDivElement?div.classList.add(element):div.nativeElement.classList.add(element);
    })
  }



  searchProject(): void {
    let listFind: Project[]
    let valeur = this.recherche.value.searchField?.toLowerCase()
    if (valeur !== '' && valeur !== undefined && valeur !== null) {
      listFind = this.service.getAllProject().filter(project => project.title.toLowerCase().includes(valeur))
      this.listProject.set(listFind)
    }
    else {
      this.listProject.set(this.service.getAllProject())
    }

  }


}
