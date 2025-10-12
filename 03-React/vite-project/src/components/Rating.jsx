import { useState } from 'react';

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div className="rating-container">
           <h2>Rate Your Experience</h2>
            <div className="starts">
                {[1,2,3,4,5].map((star) => (
                    <span onClick={() => setRating(star)}
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(0)}
                          key={star} className="star">
                        ★
                    </span>
                ))}
            </div>
        </div>
    )
};

export default Rating;