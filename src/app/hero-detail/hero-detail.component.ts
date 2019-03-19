// Modifiez l'instruction @ angular / core import pour inclure le symbole d'entrée.
import { Component, OnInit, Input } from '@angular/core';
// Le modèle de composant HeroDetail se lie à la propriété hero du composant qui est de type Hero.
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // Ajoutez une propriété hero, précédée du décorateur @Input ().
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
