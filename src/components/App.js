import './../App.css';
import React from 'react'
import Header from './Header';
import JobsList from './JobsList';

function App() {
	return (
		<React.Fragment>
			<Header />
			<JobsList />
		</React.Fragment>
	)
}

export default App;