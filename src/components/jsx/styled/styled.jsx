import styled from "styled-components";

export const DiscountedPrice = styled.span`
color: ${(props) => (props.isDiscounted ? 'red' : '')};
`;

export const Price = styled.span`
text-decoration: ${(props) => (props.isDiscounted ? 'line-through' : '')};
`;