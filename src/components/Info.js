import Headers from './Headers';
import Details from './Details';
import './../styles/Info.css';
import { getDateOffset } from '../utils/dateUtils';

function Info({companyName, postDate}) {
    const postingOffset = getDateOffset(new Date(postDate));

    return (
        <div className='job-info'>
            <Headers
                companyName={companyName}
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