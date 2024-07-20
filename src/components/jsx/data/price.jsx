import { StyledDiscountedPrice } from "../styled/styled"
import { currency } from "./js/constants";

function DisplayPrice(ordPrice, discPrice, quantity = 1) {
    const isdiscount = Boolean(ordPrice > discPrice)
    return (
        <div className="product-price"> 
            { Math.round(discPrice * quantity) }&nbsp;{currency}
            { isdiscount ? <StyledDiscountedPrice isDiscounted={ isdiscount }> ({Math.round ((discPrice - ordPrice) * quantity)}&nbsp;{currency})</StyledDiscountedPrice> : ''}
        </div>
    );
}

export default DisplayPrice;