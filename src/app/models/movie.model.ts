export class Movie {
  public nom: String;
  public realisateur: String;
  public annee_production: number;
  public nationalite: String;
  public derniere_diffusion: number;
  public nb_diffusion: number;
  public nb_premiere_partie: number;
  public moyenne_diffusion_par_an: number;

  constructor(args: Movie) {
    this.nom = args.nom;
    this.realisateur = args.realisateur;
    this.annee_production = args.annee_production;
    this.nationalite = args.nationalite;
    this.derniere_diffusion = args.derniere_diffusion;
    this.nb_diffusion = args.nb_diffusion;
    this.nb_premiere_partie = args.nb_premiere_partie;
    this.moyenne_diffusion_par_an = args.moyenne_diffusion_par_an;
  }
}
