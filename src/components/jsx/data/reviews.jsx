function Reviews (productReview) {
    const isReview = Boolean(productReview.length);

    return ( isReview ?
        <div>
            <div>Review</div>
            <div>
                { productReview.map((review) =>
                <div key={review.id} className="card mt-3 p-3">
                    <div className="reviewer-name">{review['username']}</div>
                    <div>
                        { StarRating (review['rating']) }
                    </div>
                    <div>{review['description']}</div>
                </div>
            )}</div>
        </div> : <div>Not reviewed yet</div>
    );
}

export default Reviews;

function StarRating (rating) {

    switch(rating) {
        case 0:
            return (
                <div>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
            );
        case 1:
            return (
                <div>
                    <span className="fa fa-star review-checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
            );
        case 2:
            return (
                <div>
                    <span className="fa fa-star review-checked"></span>
                    <span className="fa fa-star review-checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
            );
        case 3:
            return (
                <div>
                    <span className="fa fa-star review-checked"></span>
                    <span className="fa fa-star review-checked"></span>
                    <span className="fa fa-star review-checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
            );
        case 4:
            return (
                <div>
                    <span className="fa fa-star review-checked"></span>
                    <span className="fa fa-star review-checked"></span>
                    <span className="fa fa-star review-checked"></span>
                    <span className="fa fa-star review-checked"></span>
                    <span className="fa fa-star"></span>
                </div>
            );
        case 5:
            return (
                <div>
                    <span className="fa fa-star review-checked"></span>
                    <span className="fa fa-star review-checked"></span>
                    <span className="fa fa-star review-checked"></span>
                    <span className="fa fa-star review-checked"></span>
                    <span className="fa fa-star review-checked"></span>
                </div>
            );
        default:
            return (
                <div>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
            );
    }
}