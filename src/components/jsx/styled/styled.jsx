import styled from "styled-components";

export const StyledDiscountedPrice = styled.span`
color: ${(props) => (props.isDiscounted ? 'red' : '')};
`;