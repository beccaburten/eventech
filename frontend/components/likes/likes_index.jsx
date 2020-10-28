import React from 'react';
import LikesIndexItem from './likes_index_item';

class LikesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        
        const { likedEvents, user, currentUserId, destroyLike} = this.props;
        if (!user) return null;
        if (likedEvents.some((event) => typeof event === 'undefined')) return null;
        
        return (
            <div className="registration-index-container">
                <h1 className="likes-index-header">Likes</h1>
                <div className="likes-index">
                    {likedEvents.map((likedEvent, idx) => (
                        <LikesIndexItem key={idx} event={likedEvent} currentUserId={currentUserId} destroyLike={destroyLike} />
                    ))}
                </div>
            </div>
        )
    }
}

export default LikesIndex;