
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

export default StarRating;