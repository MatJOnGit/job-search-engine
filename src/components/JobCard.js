import './../styles/JobCard.css'

function JobCard() {
    return (
        <li className='job-card'>
            <div className='company-picture'></div>
            <div className='job-info'></div>
            <div className='job-tags'>
                <div>Front-end</div>
                <div>Senior</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>Javascript</div>
            </div>
        </li>
    )
}

export default JobCard