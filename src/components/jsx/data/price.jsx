import { StyledPrice, StyledDiscountedPrice } from "../styled/styled"

function DisplayPrice(ordPrice, discPrice) {
    const isdiscount = Boolean(ordPrice > discPrice)
    return (
        <div> 
            <StyledPrice isDiscounted = { isdiscount }> { ordPrice } </StyledPrice> 
            { isdiscount ? <StyledDiscountedPrice isDiscounted={ isdiscount }> { discPrice } </StyledDiscountedPrice> : ''}
        </div>
    );
}

export default DisplayPrice;