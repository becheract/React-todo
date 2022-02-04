import './Header.scss'
import {MdFormatListBulleted } from 'react-icons/md'

function Header() {
	return (
		<header>
			<div className='header-container'>
				<div className="title"> 
				<MdFormatListBulleted className='svg'/>Todo App</div>
				<div className="author">by Bechera Chapman-Tremblay</div>
			</div>
		</header>
	);
}

export default Header;
