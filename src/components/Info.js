import Headers from './Headers';
import Details from './Details';
import './../styles/Info.css';
import { getDateOffset } from '../utils/dateUtils';

function Info(props) {
    const postingOffset = getDateOffset(new Date(props.postDate));

    return (
        <div className='job-info'>
            <Headers
                companyName={props.companyName}
                postingOffset={postingOffset}
                isJobFeatured={true}
            />
            <h2>Senior Frontend Developer</h2>
            <Details
                publicationDelay={postingOffset}
            />
        </div>
    )
}

export default Info;