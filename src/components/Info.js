import Headers from './Headers';
import Details from './Details';
import './../styles/Info.css';
import { getDateOffset } from '../utils/dateUtils';
import { getCapitalizedWords } from '../utils/wordsUtils';

function Info(props) {
    const postingOffset = getDateOffset(new Date(props.postDate));

    return (
        <div className='job-info'>
            <Headers
                companyName={props.companyName}
                postingOffset={postingOffset}
                isJobFeatured={props.isJobFeatured}
            />

            <h2>{getCapitalizedWords(props.position)}</h2>
            
            <Details
                publicationDelay={postingOffset}
                contractType = {props.contractType}
                location = {props.location}
            />
        </div>
    )
}

export default Info;