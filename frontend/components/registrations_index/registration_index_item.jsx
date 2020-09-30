import React from 'react';
import { Link } from 'react-router-dom'
import { showPageMonth, showPageDay, formatDate, formatTime } from '../../util/format_util'

class RegistrationIndexItem extends React.Component {

    render() {
        debugger;
        const { attendingevent, user } = this.props;
        return (
            //NEED TO FIX LINK TO= ... it's currently passing in EVENT id, need REGISTRATION id
            <Link to={`/u/${user.id}/t/${attendingevent.id}`} className="registration-index-item" user={user} attendingevent={attendingevent}>
                <div>
                    <p id="reg-month">{showPageMonth(attendingevent.date)}</p>
                    <p id="reg-day">{showPageDay(attendingevent.date)}</p>
                </div>
                <img className="reg-promo" src={attendingevent.photoUrl} alt={attendingevent.title} />
                <div className="ev-idx-text">
                    <p id="reg-title">{attendingevent.title}</p>
                    <p id="reg-date">{formatDate(attendingevent.date)} {formatTime(attendingevent.start_time)}</p>
                </div>
            </Link>
        )
    }
}

export default RegistrationIndexItem;