import movieDBClient from '../../api/page'
import TvCardComponent from '../TvCardComponent/TvCardComponent'
async function TvSliderComponent() {
	try {
		const tvData = await movieDBClient.fetchPopularTvsData()
		if (!tvData) {
			throw new Error('Failed to fetch movie data.')
		}

		return (
			<section>
				<h2>Explore popular TV shows</h2>
				<main style={{ display: 'flex' }}>
					<TvCardComponent tvData={tvData} />
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
export default TvSliderComponent
