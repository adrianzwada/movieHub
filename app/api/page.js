class TheMovieDBClient {
	constructor() {
		this.baseUrl = 'https://api.themoviedb.org/3'
		this.authToken = process.env.NEXT_PUBLIC_API_TOKEN
	}

	async handleRequest(endpoint) {
		try {
			const response = await fetch(`${this.baseUrl}${endpoint}`, {
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${this.authToken}`,
				},
			})

			if (!response.ok) {
				throw new Error(`Failed to fetch data. Status: ${response.status}, ${response.statusText}`)
			}

			return await response.json()
		} catch (error) {
			console.error(error)
			return null
		}
	}

	fetchPopularMoviesData() {
		return this.handleRequest('/movie/popular?language=en-US&page=1')
	}
}

const movieDBClient = new TheMovieDBClient()
export default movieDBClient
