import Movie from './Movie';

export default async function Home() {
  const popularMovies = await fetch(
    `${process.env.NEXT_SERVER_BASE_ULR}movie/popular?api_key=${process.env.NEXT_API_KEY}`
  );
  const result = await popularMovies.json();
  console.log('result', result);
  //grid-cols-fluid is custom (added in tailwind.config)

  return (
    <main>
      <h1 className=" border-b-2 border-lime-900 w-1/4">Popular Movies</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {result.results.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
