import styled from "styled-components";

export const StyledDiscountedPrice = styled.span`
color: ${(props) => (props.isDiscounted ? 'red' : '')};
`;

export const StyledPrice = styled.span`
text-decoration: ${(props) => (props.isDiscounted ? 'line-through' : '')};
`;