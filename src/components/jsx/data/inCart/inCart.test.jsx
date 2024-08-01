import { cleanup, render, screen } from "@testing-library/react";
import InCart from ".";

describe('InCart ()', () => {
    const mockCart = [
    {
        "id": "10d6cc02-b282-46bb-b35c-dbc4bb5d91d9",
        "title": "Toy car",
        "quantity": 2,
        "discountedPrice": 449.95,
        "price": 499.95
    },
    {
        "id": "fbf07ebe-9f9a-4895-8a16-567acbbeef4e",
        "title": "Wireless Keyboard",
        "quantity": 4,
        "discountedPrice": 75.99,
        "price": 75.99
    }
    ];

    const mockNewProduct = {
        "id": "159fdd2f-2b12-46de-9654-d9139525ba87",
        "title": "Gold headphones",
        "description": "Professional headphones with gold trim.",
        "price": 449,
        "discountedPrice": 382,
    };

    const mockExistingProduct = {
        "id": "fbf07ebe-9f9a-4895-8a16-567acbbeef4e",
        "title": "Wireless Keyboard",
        "quantity": 4,
        "discountedPrice": 75.99,
        "price": 75.99
    };

    test('it verifies product is in cart and returns nothing if it doesnt', () => {
        render(InCart(mockCart, mockNewProduct));

        const productQuantity = screen.queryByText('In cart:');
        const productSubtotal = screen.queryByText('Sub-total:');

        expect(productQuantity).toBeFalsy();
        expect(productSubtotal).toBeFalsy();

    });

    test('it verifies product is in cart and return details if it does', () => {
        render(InCart(mockCart, mockExistingProduct));

        const productQuantity = screen.queryByText('In cart:');
        const productSubtotal = screen.queryByText('Sub-total:');

        expect(productQuantity).toBeTruthy();
        expect(productSubtotal).toBeTruthy();

    })
})
