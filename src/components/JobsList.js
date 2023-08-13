import { jobs } from './../data/Jobs';
import JobCard from './JobCard';
import './../styles/JobsList.css';

function JobsList() {
    return (
        <ul className='jobs-list'>
            {jobs.map((props) => (
                <JobCard
                    key = {props.id}
                    pictureName = {props.picture}
                    companyName = {props.company}
                    postDate = {props.date}
                    position = {props.position}
                    contractType = {props.status}
                    location = {props.location}
                    hashtagsList = {props.hashtags}
                    isJobFeatured = {props.featured}
                />
            ))}
        </ul>
    )
}

export default JobsList;