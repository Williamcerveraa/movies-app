//MODELOS QUE FUNGEN COMO BASE DE DATOS CON SUS PARAMETROS Y TIPOS

export interface Serie {
  id: number;
  title? : string;
  name: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: string;
  backdrop: string; //poster rectangular de imagen
}

export interface CompleteSerie extends Serie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
  last_air_date: Date;
}