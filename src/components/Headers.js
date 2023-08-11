import Highlights from './Highlights';
import './../styles/Headers.css';

function JobHeaders({companyName, postingOffset, isJobFeatured}) {
    return (
        <div className='job-headers'>
            <h1>{companyName}</h1>

            <Highlights
                postingOffset={postingOffset}
                isJobFeatured={isJobFeatured}
            />
        </div>
    )
}

export default JobHeaders;