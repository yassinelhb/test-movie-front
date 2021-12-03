import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(
    movies: any[],
    nom: string = '',
    realisateur: string = '',
    nationalite: string = ''
  ): any[] {
    if (!movies) {
      return [];
    }

    return movies.filter((movie) => {
      return (
        movie.nom.toLocaleLowerCase().includes(nom.toLocaleLowerCase()) &&
        movie.nationalite
          .toLocaleLowerCase()
          .includes(nationalite.toLocaleLowerCase()) &&
        movie.realisateur
          .toLocaleLowerCase()
          .includes(realisateur.toLocaleLowerCase())
      );
    });
  }
}
