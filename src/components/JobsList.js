import JobCard from './JobCard';
import './../styles/JobsList.css';

function JobsList() {
    const photosnapLogo = 'photosnap.svg';
    const manageLogo = 'manage.svg';

    return (
        <ul className='jobs-list'>
            <JobCard
                pictureName = {photosnapLogo}
                companyName = 'Photosnap'
                postDate = '2023-08-10T16:15'
                hashtagsList = {['Front-end', 'Senior', 'HTML', 'CSS', 'Javascript']}
            />

            <JobCard
                pictureName = {manageLogo}
                companyName = 'Manage'
                postDate = '2023-08-08T16:15'
                hashtagsList = {['Fullstack', 'Midweight', 'Python', 'React']}
            />
        </ul>
    )
}

export default JobsList;