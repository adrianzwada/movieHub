import { FaStar } from 'react-icons/fa'
import { MdOutlinePlaylistAdd } from 'react-icons/md'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { Button, CardActionArea, CardActions } from '@mui/material'
import Link from 'next/link'

const MovieCardComponent = ({ movieData }) => {
	function ratingAdjust(par, decimalPlaces = 1) {
		const factor = 10 ** decimalPlaces
		return Math.floor(par * factor) / factor
	}

	const cardStyles = {
		width: '14em',
		height: '20em',
	}

	const cardMedia = {
		component: 'img',
		sx: {
			objectFit: 'cover',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		image: `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movieData.backdrop_path}`,
		alt: movieData.title,
	}
	return (
		<Card sx={cardStyles}>
			<Link key={movieData.id} href='/movie/[id]' as={`/movie/${movieData.id}`} passHref>
				<CardActionArea movieId={movieData.id}>
					<CardMedia
						sx={cardMedia}
						component='img'
						image={`https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movieData.backdrop_path}`}
						alt={movieData.title}
					/>
				</CardActionArea>
				<p>{movieData.title}</p>
			</Link>
			<CardActions>
				<Button style={{ fontSize: '25px', color: 'black' }}>
					<FaStar style={{ color: 'yellow' }} />
					{ratingAdjust(movieData.vote_average)}
					<MdOutlinePlaylistAdd />
				</Button>
			</CardActions>
			<div>
				Release date:
				<p>{movieData.release_date}</p>
			</div>
		</Card>
	)
}

export default MovieCardComponent
