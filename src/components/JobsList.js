import { jobsData } from './../data/Jobs';
import JobCard from './JobCard';
import './../styles/JobsList.css';

function JobsList(props) {
    return (
        <ul className='jobs-list'>
            {jobsData.map((job) => (
                <JobCard
                    key = {job.id}
                    pictureName = {job.picture}
                    companyName = {job.company}
                    postDate = {job.date}
                    position = {job.position}
                    contractType = {job.status}
                    location = {job.location}
                    hashtagsList = {job.hashtags}
                    isJobFeatured = {job.featured}
                    handleHashtagClick = {props.handleHashtagClick}
                />
            ))}
        </ul>
    )
}

export default JobsList;