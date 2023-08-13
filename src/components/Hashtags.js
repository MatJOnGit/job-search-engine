import './../styles/Hashtags.css';
import { getCapitalizedWords } from '../utils/wordsUtils';

function Hashtags({hashtagsList}) {
    return (
        <ul className='job-hashtags'>
            {hashtagsList.map((hashtag, index) => (
                <li key={index}>{getCapitalizedWords(hashtag)}</li>
            ))}
        </ul>
    )
}

export default Hashtags;