import { StyledDiscountedPrice } from "../styled/styled"

function DisplayPrice(ordPrice, discPrice, quantity = 1) {
    const isdiscount = Boolean(ordPrice > discPrice)
    const currency = 'NOK';
    return (
        <div className="product-price"> 
            { Math.round(discPrice * quantity) }&nbsp;{currency}
            { isdiscount ? <StyledDiscountedPrice isDiscounted={ isdiscount }> ({Math.round ((discPrice - ordPrice) * quantity)}&nbsp;{currency})</StyledDiscountedPrice> : ''}
        </div>
    );
}

export default DisplayPrice;