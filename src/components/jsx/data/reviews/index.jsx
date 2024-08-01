import StarRating from "../reviewRating";

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
