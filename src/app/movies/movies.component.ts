import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movies.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  nom: string = '';
  nationalite: string = '';
  realisateur: string = '';
  loading: boolean = false;
  countries: string[] = [
    'France',
    'Europe',
    'Etats-Unis',
    'autres nationalités',
  ];
  constructor(private service: MovieService, private modal: NgbModal) {
    this.getMovies();
  }

  ngOnInit(): void {}

  getMovies() {
    this.loading = true;
    this.service.getMovies().subscribe((res) => {
      this.movies = res;
      this.loading = false;
    });
  }

  openModal(type: string) {
    var items = [
      { name: 'Edward', value: 21 },
      { name: 'Sharpe', value: 37 },
      { name: 'And', value: 45 },
      { name: 'The', value: -12 },
      { name: 'Magnetic', value: 13 },
      { name: 'Zeros', value: 37 },
    ];

    let title = '';
    let data = [];
    if (type === 'stat1') {
      title = 'Top 5 des films les plus diffusés';
      data = this.movies
        .sort((a, b) => b.nb_diffusion - a.nb_diffusion)
        .slice(1, 5);
    } else if (type === 'stat2') {
      title = 'Top 5 des films avec le meilleur ratio';
      data = this.movies
        .sort(
          (a, b) =>
            b.nb_premiere_partie / b.nb_diffusion -
            a.nb_premiere_partie / a.nb_diffusion
        )
        .slice(1, 5);
    } else {
      title = 'Top 5 des réalisateurs avec la meilleur moyenne de diffusion';
      data = this.movies
        .sort(
          (a, b) =>
            b.moyenne_diffusion_par_an / b.nb_diffusion -
            a.moyenne_diffusion_par_an / a.nb_diffusion
        )
        .slice(1, 5);
    }
    const modalRef = this.modal.open(DialogComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.movies = data;
  }
}
