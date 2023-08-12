import Logo from './Logo';
import Splitter from './Splitter';
import Info from './Info';
import Hashtags from './Hashtags';
import './../styles/JobCard.css';

function JobCard(props) {
    return (
        <li className='job-card'>
            <div className='job-content'>
                <Logo
                    pictureName = {props.pictureName}
                />

                <Info
                    companyName = {props.companyName}
                    postDate = {props.postDate}
                />
            </div>
            
            <Splitter />

            <Hashtags
                hashtagsList={props.hashtagsList}
            />
        </li>
    )
}

export default JobCard;