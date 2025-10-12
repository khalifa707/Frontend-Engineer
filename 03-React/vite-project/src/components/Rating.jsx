import { useState } from 'react';

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const feedbackMessages = [
        'Terrible',
        'Bad',
        'OK',
        'Good',
        'Excellent'
    ];
    return (
        <div className="rating-container">
           <h2>Rate Your Experience</h2>
            <div className="stars">
                {[1,2,3,4,5].map((star) => (
                    <span onClick={() => setRating(star)}
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(0)}
                          key={star} className={`star ${star <= (hover || rating) ? 'active' : ''}`}>
                        ★
                    </span>
                ))}
            </div>
            {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
        </div>
    )
};

export default Rating;