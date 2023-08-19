function Rating(props) {
  const { rating, numReviews, caption } = props;
  return (
    <div className="text-orange-500 rating">
      <span>
        <i
          className={
            rating >= 1
              ? 'fas fa-star text-orange-500'
              : rating >= 0.5
              ? 'fas fa-star-half-alt text-orange-'
              : 'far fa-star text-orange-500'
          } 
        />
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? 'fas fa-star text-orange-500'
              : rating >= 1.5
              ? 'fas fa-star-half-alt text-orange-500'
              : 'far fa-star text-orange-500'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? 'fas fa-star text-orange-500'
              : rating >= 2.5
              ? 'fas fa-star-half-alt text-orange-500'
              : 'far fa-star text-orange-500'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? 'fas fa-star text-orange-500'
              : rating >= 3.5
              ? 'fas fa-star-half-alt text-orange-500'
              : 'far fa-star text-orange-500'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? 'fas fa-star text-orange-500'
              : rating >= 4.5
              ? 'fas fa-star-half-alt text-orange-500'
              : 'far fa-star text-orange-500'
          }
        />
      </span>
      {caption ? (
        <span className="text-orange-500">{caption}</span>
      ) : (
        <span className="text-orange-500">{' ' + numReviews + ' reviews'}</span>
      )}
    </div>
  );
}
export default Rating;
