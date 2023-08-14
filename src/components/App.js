import { useState } from 'react'
import './../styles/App.css';
import React from 'react'
import Banner from './Banner';
import JobsList from './JobsList';

function App() {
	const [selectedHashtags, setSelectedHashtags] = useState([])

	const handleHashtagClick = (hashtag) => {
		if (!selectedHashtags.includes(hashtag)) {
			const updatedHashtags = [...selectedHashtags, hashtag];
			setSelectedHashtags(updatedHashtags);
			console.log(updatedHashtags);
		}
	}

	return (
		<React.Fragment>
			<Banner />
			<JobsList handleHashtagClick={handleHashtagClick} />
		</React.Fragment>
	)
}

export default App;