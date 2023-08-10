import CompanyLogo from './CompanyLogo';
import JobInfo from './JobInfo';
import JobTags from './JobTags';
import './../styles/JobCard.css';

function JobCard() {
    return (
        <li className='job-card'>
            <div>
                <CompanyLogo />
                <JobInfo />
            </div>
            
            <JobTags />
        </li>
    )
}

export default JobCard;