function Reviews (productReview) {
    const isReview = Boolean(productReview.length);

    return ( isReview ?
        <div>
            <div>Reviews</div>
            <div>
                { productReview.map((review) =>
                <div key={review.id}>
                    <div>{review['username']}</div>
                    <div>{review['rating']}</div>
                    <div>{review['description']}</div>
                </div>
            )}</div>
        </div> : <div>No reviews yet</div>
    );
}

export default Reviews;