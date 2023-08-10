import JobCard from './JobCard';
import './../styles/JobsList.css';

function JobsList() {
    return (
        <ul className='jobs-list'>
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
        </ul>
    )
}

export default JobsList;