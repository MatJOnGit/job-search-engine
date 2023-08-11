import './../styles/Logo.css';

function Logo() {
    const imagesUrl = './../../images/companies_logo/';

    return (
        <img
            src={`${imagesUrl}photosnap.svg`}
            alt='account logo'
            className='company-logo'
        />
    )
}

export default Logo;