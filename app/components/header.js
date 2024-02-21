import Link from 'next/link'
import SearchBar from './searchBar/SearchBar'
export default function Header() {
	return (
		<div>
			<Link href='/'>MovieHub</Link>
			<Link href='/menu'>Menu</Link>
			<SearchBar />
			<Link href='/watchlist'>watchlist</Link>
			<Link href='/signin'>sig in</Link>
		</div>
	)
}
