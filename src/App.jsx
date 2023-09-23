import { React, useState, useEffect } from 'react'
import './App.css'

import { Header, Body, Footer } from './components'

function App() {
	const [nightMode, setNightMode] = useState(false);

	const toggleDisplay = () => {
		setNightMode(prev => !prev);
	}

	useEffect(() => {
		if (nightMode) {
			document.body.classList.add('nightmode');
		} else {
			document.body.classList.remove('nightmode');
		}

		return () => {
			document.body.classList.remove('nightmode');
		}
	}, [nightMode]);


	return (
		<>
			<div className='background'>
				<Header toggleDisplay={toggleDisplay} />
				<Body />
				<Footer />
			</div>
		</>
	)
}

export default App