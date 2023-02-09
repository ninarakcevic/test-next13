import Link from 'next/link';
import Image from 'next/image';
import { TMovieProps } from '@/types/movie.types';

export default function Movie({ title, id, poster_path, release_date }: TMovieProps) {
  const imagePath = `https://image.tmdb.org/t/p/original${poster_path}`;
  // NOTE: need to add movie db as a hostname to the config file so whenever we are fetching images from
  //external link need to define it in next config

  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`movie/${Number(id)}`}>
        <Image src={imagePath} alt="poster" width={400} height={400} />
      </Link>
    </div>
  );
}
