import { screen, render, fireEvent } from "@testing-library/react";
import DisplayAProduct from ".";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('DisplayAProduct ()', () => {
    const mockAProduct = {
        "id": "159fdd2f-2b12-46de-9654-d9139525ba87",
        "title": "Gold headphones",
        "description": "Professional headphones with gold trim.",
        "price": 449,
        "discountedPrice": 382,
        "image": {
            "url": "https://static.noroff.dev/api/online-shop/3-headphones-beats.jpg",
            "alt": ""
        },
        "rating": 4,
        "tags": [
            "headphones"
        ],
        "reviews": [
            {
            "id": "88e11191-d2e5-4bfb-9bcb-d7e158284657",
            "username": "Michael J.",
            "rating": 4,
            "description": "Good sound quality."
            }
        ]
    };

    const mockCart = [
        {
            "id": "159fdd2f-2b12-46de-9654-d9139525ba87",
            "title": "Gold headphones",
            "quantity": 1,
            "discountedPrice": 382,
            "price": 449
        }
    ];

    const mockAddProduct = jest.fn();
    const mockRemoveProduct = jest.fn();

    test('it displays a product', () => {
        render(
            <MemoryRouter initialEntries={['/product']}>
                <Routes>
                    <Route 
                        path='/product' 
                        element={DisplayAProduct(mockAProduct, mockCart, mockAddProduct, mockRemoveProduct)} />
                </Routes>
            </MemoryRouter>
        );

        const title = screen.getByText('Gold headphones');
        const description = screen.getByText('Professional headphones with gold trim.');
        const price = screen.getAllByText('382 NOK');
        const image = screen.getByRole('img');
        const review = screen.getByText('Good sound quality.');

        const addButton = screen.getByText('Add to cart');
        const removeButton = screen.getByText('Remove from cart');
        const checkoutButton = screen.getByText('Checkout');

        expect(title).toBeInTheDocument;
        expect(description).toBeInTheDocument;
        expect(price).toBeInTheDocument;
        expect(image).toHaveAttribute('src', 'https://static.noroff.dev/api/online-shop/3-headphones-beats.jpg');
        expect(checkoutButton).toHaveAttribute('href', '/checkout');
        expect(review).toBeInTheDocument;

        expect(mockAddProduct).toHaveBeenCalledTimes(0);
        expect(mockRemoveProduct).toHaveBeenCalledTimes(0);

        fireEvent.click(addButton);
        fireEvent.click(removeButton);

        expect(mockRemoveProduct).toHaveBeenCalledTimes(1);
        expect(mockAddProduct).toHaveBeenCalledTimes(1);

    });
})