import Logo from './Logo';
import Splitter from './Splitter';
import Info from './Info';
import Hashtags from './Hashtags';
import './../styles/JobCard.css';

function JobCard() {
    return (
        <li className='job-card'>
            <Logo />
            <Info
                companyName='Photosnap'
                postDate='2023-08-09T16:15'
            />
            
            <Splitter />
            <Hashtags />
        </li>
    )
}

export default JobCard;