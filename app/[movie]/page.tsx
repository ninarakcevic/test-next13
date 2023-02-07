import Image from 'next/image';

export interface IMovie {
  id: number;
}

// export async function generateStaticParams() {
//   const data = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
//   );
//   const res = await data.json();

//   // Map each individual movie and return all the ids and mapping them to the URL. When this code
//   // is pushed to production it will fo to each movie, get their ID and then go over each one of them and render them out
//   // So when we go to the page it will be pre-rendered and when we click on specific one it will load up instantly
//   // (unless we add revalidate)

//   return res.results?.map((movie: IMovie) => ({
//     movie: movie.id,
//   }));
// }

export default async function MovieDetail({ params }: { params: { movie: string } }) {
  const { movie } = params;

  const data = await fetch(
    `${process.env.NEXT_SERVER_BASE_ULR}movie/${movie}?api_key=${process.env.NEXT_API_KEY}`
  );
  const res = await data.json();
  const imagePath = `https://image.tmdb.org/t/p/original${res.poster_path}`;

  return (
    <div>
      <h2 className="text-2xl">{res.title}</h2>
      <h2 className="text-lg">{res.release_date}</h2>
      <h2>{res.runtime} minutes</h2>
      <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md">{res.status}</h2>
      <Image
        src={imagePath}
        className="my-12 w-full"
        alt={res.title}
        width={1000}
        height={1000}
        priority
      />
      <div className="my-4">
        <p className="text-lg">{res.overview}</p>
      </div>
    </div>
  );
}
