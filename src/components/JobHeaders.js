import './../styles/JobHeaders.css';

function JobHeaders({publicationDelay, isJobFeatured}) {
    const isJobNew = (publicationDelay < 3);

    return (
        <div className='job-headers'>
            <h1>Photosnap</h1>
            {isJobNew && <span className='new-tag'>NEW!</span>}
            {isJobFeatured && <span className='featured-tag'>FEATURED</span>}
        </div>
    )
}

export default JobHeaders;