import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <a href="http://www.beccaburten.com/">
                    <img src={window.portfolioURL} />
                </a>
                <a href="https://www.github.com/beccaburten/eventech">
                    <img src={window.githubURL} />
                </a>
                <a href="http://www.linkedin.com/in/beccaburten/">
                    <img src={window.linkedinURL} />
                </a>
                <a href="https://www.angel.co/u/becca-burten/">
                    <img src={window.angelURL} />
                </a>
            </div>
        )
    }
}

export default Footer;