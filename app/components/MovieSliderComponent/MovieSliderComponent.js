import movieDBClient from '../../api/page'
import MovieCardComponent from '../MovieCardComponent/MovieCardComponent'
async function MovieSliderComponent() {
	try {
		const movieData = await movieDBClient.fetchPopularMoviesData()
		if (!movieData) {
			throw new Error('Failed to fetch movie data.')
		}
		return (
			<section>
				<h2>Under the Spotlight: What to Watch - The Week's Most Popular Films</h2>
				<main style={{ display: 'flex' }}>
					<MovieCardComponent movieData={movieData} />
				</main>
			</section>
		)
	} catch (error) {
		console.error('Error in SliderComponent:', error)
		return (
			<section>
				<h2>Error</h2>
				<p>Failed to load data.</p>
			</section>
		)
	}
}

export default MovieSliderComponent
