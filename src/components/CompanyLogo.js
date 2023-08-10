import './../styles/CompanyLogo.css';

function CompanyLogo() {
    const imagesUrl = './../../images/companies_logo/';

    return (
        <img
            src={`${imagesUrl}photosnap.svg`}
            alt='account logo'
            className='company-picture'
        />
    )
}

export default CompanyLogo;