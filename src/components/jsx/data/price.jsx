import { StyledPrice, StyledDiscountedPrice } from "../styled/styled"

function DisplayPrice(ordPrice, discPrice) {
    const isdiscount = Boolean(ordPrice > discPrice)
    const currency = 'NOK';
    return (
        <div className="product-price"> 
            <div> { discPrice } {currency}</div> 
            { isdiscount ? <StyledDiscountedPrice isDiscounted={ isdiscount }> ({Math.round (discPrice - ordPrice)} {currency})</StyledDiscountedPrice> : ''}
        </div>
    );
}

export default DisplayPrice;