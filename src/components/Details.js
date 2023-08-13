import './../styles/Details.css';
import { getCapitalizedWords } from '../utils/wordsUtils';

function Details(props) {
    return (
        <ul className='job-details'>
            <li>{props.publicationDelay > 1 ? `${props.publicationDelay}d ago` : `Today`}</li>
            <li>{getCapitalizedWords(props.contractType)}</li>
            <li>{props.location}</li>
        </ul>
    )
}

export default Details;