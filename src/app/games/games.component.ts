import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Los juegos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id){
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
      <li (click)="fav('')">Quitar favorito</li>
    </ul>
  `,
  styleUrl: './games.component.css',
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  games = [
    {
      id: 1,
      name: "Marvel's Spider-Man",
    },
    {
      id: 2,
      name: "Marvel's Spider-Man: Miles Morales",
    },
    {
      id: 3,
      name: "Marvel's Spider-Man 2",
    },
  ];

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }
}
