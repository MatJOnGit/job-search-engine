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
                    position = {props.position}
                    contractType = {props.contractType}
                    location = {props.location}
                    isJobFeatured = {props.isJobFeatured}
                />
            </div>
            
            <Splitter />

            <Hashtags
                hashtagsList={props.hashtagsList}
                handleHashtagClick={props.handleHashtagClick}
            />
        </li>
    )
}

export default JobCard;