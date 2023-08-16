import './../styles/JobFilters.css';
import { getCapitalizedWords } from '../utils/wordsUtils';
import { useEffect } from 'react'

function JobFilters(props) {
    useEffect(() => {
		if (props.selectedHashtags.length > 0) {
            console.log(props.selectedHashtags);
        }
    })

    return <div id='job-filters'>
        {props.selectedHashtags.length > 0 && (
            <ul className='selected-hashtags'>
                {props.selectedHashtags.map((hashtag, index) => (
                    <li key={index}>{getCapitalizedWords(hashtag)}</li>
                ))}
            </ul>
        )}
    </div>
}

export default JobFilters;