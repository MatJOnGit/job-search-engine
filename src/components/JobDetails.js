import './../styles/JobDetails.css';

function JobDetails({publicationDelay}) {
    return (
        <div className='job-details'>
            <p>{publicationDelay > 1 ? `${publicationDelay}d ago` : `today`}</p>
            <p>Full Time</p>
            <p>USA only</p>
        </div>
    )
}

export default JobDetails;