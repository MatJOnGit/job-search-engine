import './../styles/Hashtags.css';

function Hashtags({hashtagsList}) {
    return (
        <ul className='job-hashtags'>
            {hashtagsList.map((hashtag, index) => (
                <li key={index}>{hashtag}</li>
            ))}
        </ul>
    )
}

export default Hashtags;