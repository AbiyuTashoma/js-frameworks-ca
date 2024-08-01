import { StyledDiscountedPrice } from "../../styled/priceStyled"
import { currency } from "../../../js/constants";

function DisplayPrice(ordPrice, discPrice, quantity = 1) {
    const isdiscount = Boolean(ordPrice > discPrice)
    return (
        <div className="product-price"> 
            <span data-testid="product-price">{ Math.round(discPrice * quantity) }</span>
            <span>&nbsp;</span>
            <span data-testid="currency">{currency}</span>
            { isdiscount ? <StyledDiscountedPrice isDiscounted={ isdiscount }> ({ Math.round((discPrice - ordPrice) * quantity) }&nbsp;{currency})</StyledDiscountedPrice> : ''}
        </div>
    );
}

export default DisplayPrice;