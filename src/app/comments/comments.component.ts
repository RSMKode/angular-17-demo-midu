import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: ` <h3>Comentarios de lo que sea</h3>
    <img
      src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-dcb93e90c4e1548ffb16978a5a8d182270c872a9-s1100-c50.jpg"
      alt="meme de perro en fuego diciendo 'this is fine'"
    />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
      assumenda nemo minima qui dolorem eum quam commodi quos ad, reprehenderit
      eligendi repellat officia, fuga impedit. Delectus distinctio corrupti esse
      corporis?
    </p>`,
  styles: `
    img{
      width: 100%;
    }`,
})
export class CommentsComponent {}
