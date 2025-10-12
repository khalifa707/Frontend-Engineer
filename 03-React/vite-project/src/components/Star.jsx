
const Star = ({star, rating, hover, setRating, setHover}) => {
    return (
        <span className='star'
              style={{color: star <= (hover || rating) ? 'gold' : '#ccc'}}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
        >
            {'\u2605'}
        </span>
    )
};

export default Star;