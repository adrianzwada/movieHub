import movieDBClient from '../../apiClients/apiClients'

export async function getStaticPaths(movieId) {

	const movieData = await movieDBClient.fetchMovieData(movieId)
	const paths = movieData.results.map(movie => ({
		params: { id: String(movie.id) },
	}))

	return {
		paths,
		fallback: false,
	}
}

const MoviePage = ({ movieData }) => {
	return (
		<div>
			<h1>Movie ID: {movieData.name}</h1>
		</div>
	)
}

export default MoviePage
