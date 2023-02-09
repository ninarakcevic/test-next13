export interface IMovie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

export interface IParams {}

export type TMovieProps = {
  key: number;
  id: number;
  poster_path: string | null;
  title: string;
  release_date: string;
};
