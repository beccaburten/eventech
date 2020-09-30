import React from 'react';
import { Link } from 'react-router-dom'
import { showPageMonth, showPageDay, formatDate, formatTime } from '../../util/format_util'

class RegistrationIndexItem extends React.Component {

    render() {
        debugger;
        const { registration, user } = this.props;
        return (
            //NEED TO FIX LINK TO= ... it's currently passing in EVENT id, need REGISTRATION id
            <Link to={`/u/${user.id}/t/${registration.reg_id}`} className="registration-index-item" user={user} registration={registration}>
                <div>
                    <p id="reg-month">{showPageMonth(registration.date)}</p>
                    <p id="reg-day">{showPageDay(registration.date)}</p>
                </div>
                <img className="reg-promo" src={registration.photoUrl} alt={registration.title} />
                <div className="ev-idx-text">
                    <p id="reg-title">{registration.title}</p>
                    <p id="reg-date">{formatDate(registration.date)} {formatTime(registration.start_time)}</p>
                </div>
            </Link>
        )
    }
}

export default RegistrationIndexItem;