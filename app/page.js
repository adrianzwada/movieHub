import MovieSliderComponent from './components/MovieSliderComponent/MovieSliderComponent'
import TvSliderComponent from './components/TVSliderComponent/TvSliderComponent'
import PeopleSliderComponent from './components/PeopleSliderComponent/PeopleSliderComponent'
import Link from 'next/link'

function Home() {
	const photos = Array.from({ length: 6 }, (_, i) => i + 1)
	return (
		<>
			<main className='flex min-h-screen text-3xl gap-3 flex-col items-center bg-neutral-800 justify-between p-24'>
				{photos.map(id => (
					<Link key={id} href={`/watch/${id}`} className='bg-green p-12'>
						{id}
					</Link>
				))}
			</main>
			<MovieSliderComponent />
			<TvSliderComponent />
			<PeopleSliderComponent />
		</>
	)
}

export default Home
