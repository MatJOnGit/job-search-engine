import JobHeaders from './JobHeaders';
import JobDetails from './JobDetails';
import './../styles/JobInfo.css';
import { getDateOffset } from '../utils/dateUtils';

function JobInfo() {
    const postingDate = '2023-08-07T16:15';
    const postingOffset = getDateOffset(new Date(postingDate));

    return (
        <div className='job-info'>
            <JobHeaders
                publicationDelay={postingOffset}
                isJobFeatured={true}
            />
            <h2>Senior Frontend Developer</h2>
            <JobDetails
                publicationDelay={postingOffset}
            />
        </div>
    )
}

export default JobInfo;