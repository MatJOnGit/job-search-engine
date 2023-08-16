import { useState } from 'react'
import './../styles/App.css';
import React from 'react'
import Banner from './Banner';
import JobFilters from './JobFilters';
import JobsList from './JobsList';

function App() {
	const [selectedHashtags, setSelectedHashtags] = useState([])

	const handleHashtagClick = (hashtag) => {
		if (!selectedHashtags.includes(hashtag)) {
			const updatedHashtags = [...selectedHashtags, hashtag];
			setSelectedHashtags(updatedHashtags);
		}
	}

	return (
		<React.Fragment>
			<Banner />
			<div className='job-search'>
				{selectedHashtags.length > 0 && (
					<JobFilters selectedHashtags={selectedHashtags} />
				)}
				<JobsList handleHashtagClick={handleHashtagClick} />
			</div>
		</React.Fragment>
	)
}

export default App;