import { useState } from 'react';
import Star from "./Star.jsx";

const Rating = (props) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const feedbackMessages = [
        'Terrible',
        'Bad',
        'OK',
        'Good',
        'Excellent'
    ];
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (rating > 0){
            setSubmitted(true);
        }
    };
    return (
        <div className="rating-container">
           <h2>{props.heading}</h2>
            <div className="stars">
                {[1,2,3,4,5].map((star) => (
                    /*<span onClick={() => setRating(star)}
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(0)}
                          key={star} className={`star ${star <= (hover || rating) ? 'active' : ''}`}>
                        ★
                    </span>*/
                    <Star
                        key={star}
                        star={star}
                        rating={rating}
                        hover={hover}
                        setRating={setRating}
                        setHover={setHover}
                    />
                ))}
            </div>
            {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
            <button className='submit-btn'
                    onClick={() => setSubmitted(true)}
                    disabled={submitted || rating === 0}>Submit</button>

            {submitted && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Thank You!</h2>
                        <p>Your rated us {rating} star{rating > 1 ? 's' : ''}</p>
                        <button className="close-btn" onClick={() => setSubmitted(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Rating;