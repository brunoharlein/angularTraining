import { Component, OnInit } from '@angular/core';
/////////////////////////////// ETAPE 4
// Retournez dans la classe HeroesComponent et importez la classe Hero.
import { Hero } from '../hero';
// ETAPE 10 importer le tableau
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
///////////////////////////////////////////////////// ETAPE 1
// Ajoutez une propriété de héros au composant Heroes pour un héros nommé bruno
// hero = "bruno"



//////////////////////////// ETAPE 5
// Refactorisez la propriété hero du composant pour qu'elle soit de type Hero.
// Initialisez-le avec un identifiant de 1 et le nom bruno.
  hero: Hero = {
    id: 1,
    name: 'Bruno'
  };

  // ETAPE 15
  // Renommez la propriété hero du composant en selectedHero
  //  mais ne l'attribuez pas. Il n'y a pas de héros sélectionné au démarrage de l'application.
  selectedHero: Hero;

// ETAPE 11
// Dans le même fichier (classe HeroesComponent), définissez une propriété de composant
// appelée héros pour exposer le tableau HEROES à des fins de liaison.
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }
  // SUITE ETAPE 15
  // Ajoutez la méthode onSelect () suivante, qui assigne le héros cliqué du modèle
  // au modèle selectedHero du composant.
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
