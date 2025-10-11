const Rating = () => {
    return (
        <div className="rating-container">
           <h2>Rate Your Experience</h2>
            <div className="starts">
                {[1,2,3,4,5].map((star) => (
                    <span key={star} className="star">
                        &#9733;
                    </span>
                ))}
            </div>
        </div>
    )
};

export default Rating;