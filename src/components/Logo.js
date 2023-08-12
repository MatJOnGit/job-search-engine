import './../styles/Logo.css';

function Logo({pictureName}) {
    const imagesUrl = './../../images/companies_logo/';

    return (
        <img
            src={`${imagesUrl}${pictureName}`}
            alt='account logo'
            className='company-logo'
        />
    )
}

export default Logo;