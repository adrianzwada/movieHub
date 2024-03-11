import movieDBClient from '../../apiClients/apiClients'
import MovieCardComponent from '../MovieCardComponent/MovieCardComponent'
async function MovieSliderComponent() {
	try {
		const movieData = await movieDBClient.fetchPopularMoviesData()
		if (!movieData) {
			throw new Error('Failed to fetch movie data.')
		}
		console.log(movieData)
		return (
			<section>
				<h2>Under the Spotlight: What to Watch - The Week's Most Popular Films</h2>
				<main style={{ display: 'flex' }}>
					{movieData &&
						movieData.results.map((movie, index) => (
							<div key={index}>
								<MovieCardComponent movieData={movie} />
							</div>
						))}
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
