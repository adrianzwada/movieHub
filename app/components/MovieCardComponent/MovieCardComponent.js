import { FaStar } from 'react-icons/fa6'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
const MovieCardComponent = ({ movieData }) => {
	function ratingAdjust(par, decimalPlaces = 1) {
		const factor = 10 ** decimalPlaces
		return Math.floor(par * factor) / factor
	}
	return (
		<>
			{movieData &&
				movieData.results.map((movie, index) => (
					<div key={index}>
						{/* <Link to=wyciągnąć dynamicznie id> */}
						<Card sx={{ maxWidth: 150 }}>
							<CardActionArea>
								<CardMedia
									component='img'
									height='200'
									image={`https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movie.backdrop_path}`}
									alt={movie.title}
								/>
							</CardActionArea>
							<CardActions>
								<Button size='medium' color='primary'>
									<FaStar style={{ color: 'yellow' }} />
									{ratingAdjust(movie.vote_average)}
								</Button>
							</CardActions>
							<div>
								Release date:
								<p>{movie.release_date}</p>
							</div>
						</Card>
					</div>
				))}
			);
		</>
	)
}

export default MovieCardComponent
