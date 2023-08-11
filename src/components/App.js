import './../styles/App.css';
import React from 'react'
import Banner from './Banner';
import JobsList from './JobsList';

function App() {
	return (
		<React.Fragment>
			<Banner />
			<JobsList />
		</React.Fragment>
	)
}

export default App;