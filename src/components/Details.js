import './../styles/Details.css';

function Details({publicationDelay}) {
    return (
        <ul className='job-details'>
            <li>{publicationDelay > 1 ? `${publicationDelay}d ago` : `today`}</li>
            <li>Full Time</li>
            <li>USA only</li>
        </ul>
    )
}

export default Details;