import { render, screen } from "@testing-library/react";
import CheckoutButton from ".";

describe('checkout button', () => {
    test('returns correct element', () => {
        render(<CheckoutButton cartLength={true} linkClass={'btn-class'} toLink={'/home'} />);

        const linkElement = screen.getByText('Checkout');
        expect(linkElement).toBeInTheDocument();

    })


    screen.debug();
})