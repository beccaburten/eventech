import React from 'react';
import { Link } from 'react-router-dom'
import { formatDate, formatTime } from '../../util/format_util'

class RegistrationIndexItem extends React.Component {

    render() {
        debugger;
        const { registration, user } = this.props;
        return (
            <Link to={`/u/${user.id}/t/${registration.id}`} className="registration-index-item" user={user}>
                <img className="promo" src={registration.photoUrl} alt={registration.title} />
                <div className="ev-idx-text">
                    <h1>{registration.title}</h1>
                    <h2>{formatDate(registration.date)} {formatTime(registration.start_time)}</h2>
                </div>
            </Link>
        )
    }
}

export default RegistrationIndexItem;