import './../styles/Highlights.css';

function Highlights({postingOffset, isJobFeatured}) {
    const isJobNew = (postingOffset < 3);

    return (
        <div className='job-highlights'>
            {isJobNew && <span className='new-tag'>NEW!</span>}
            {isJobFeatured && <span className='featured-tag'>FEATURED</span>}
        </div>
    )
}

export default Highlights;