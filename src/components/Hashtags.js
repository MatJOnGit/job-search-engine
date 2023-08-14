import './../styles/Hashtags.css';
import { getCapitalizedWords } from '../utils/wordsUtils';

function Hashtags(props) {
    return (
        <ul className='job-hashtags'>
            {props.hashtagsList.map((hashtag, index) => (
                <li
                    key={index}
                    onClick={() => props.handleHashtagClick(hashtag)}
                >
                    {getCapitalizedWords(hashtag)}
                </li>
            ))}
        </ul>
    )
}

export default Hashtags;