import { Genre } from "./genre";

export interface Artist {
  id: number;
  name: string;
  genres: Genre[];
  popularity: number;
  image: string;
}
