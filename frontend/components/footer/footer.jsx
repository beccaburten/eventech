import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <a href="http://www.github.com/beccaburten/">
                    <img className='github-logo' src={window.githubURL} />
                </a>
                <a href="http://www.linkedin.com/in/beccaburten/">
                    <img className='linkedin-logo' src={window.linkedinURL} />
                </a>
            </div>
        )
    }
}

export default Footer;