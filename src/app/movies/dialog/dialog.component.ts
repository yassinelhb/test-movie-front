import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() title: string = '';
  @Input() movies: Movie[] = [];
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
