//MODELOS QUE FUNGEN COMO BASE DE DATOS CON SUS PARAMETROS Y TIPOS
export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: string;
  backdrop: string; //poster rectangular de imagen
  name? : string
}

export interface CompleteMovie extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
}

export interface Serie {
  id: number;
  name: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: string;
  backdrop: string; //poster rectangular de imagen
}

export interface CompleteSerie extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
  last_air_date: Date;
}