import logo from '../../images/recapit-logo.svg';
import './Header.css';
import Search from '../search/Search';

const Header = () => {
	return (
		<div className='header tile'>
			<div className='flex-container'>
				<img src={logo} alt='Logo' className='header-logo' />
				<h1>
					<span className='blue'>Re</span>cap
					<span className='blue'>it</span>
				</h1>
			</div>
			<div className='flex-container'>
				<p className='text'> Recap time: </p>
				<select className='blue'>
					<option value='DAY'>Day</option>
					<option value='Week'>Week</option>
					<option value='Month'>Month</option>
					<option value='Year'>Year</option>
					<option value='All Time'>All Time</option>
				</select>
			</div>
			<Search />
		</div>
	);
};

export default Header;
