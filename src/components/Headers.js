import Highlights from './Highlights';
import './../styles/Headers.css';
import { getCapitalizedWords } from '../utils/wordsUtils';

function Headers(props) {
    const capitalizedName = getCapitalizedWords(props.companyName);

    return (
        <div className='job-headers'>
            <h1>{capitalizedName}</h1>

            <Highlights
                postingOffset={props.postingOffset}
                isJobFeatured={props.isJobFeatured}
            />
        </div>
    )
}

export default Headers;