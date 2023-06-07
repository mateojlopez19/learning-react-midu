function ListOfMovies ({ movies }) {
  return (
    <ul className="movies">
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title}/>
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResults () {
  return (
    <p>No contiene resultados</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return(
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
}