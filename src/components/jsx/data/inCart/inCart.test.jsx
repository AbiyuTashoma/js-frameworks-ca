import { render, screen } from "@testing-library/react";
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

    test('it verifies product is in cart and return details', () => {
        render(<InCart cart={mockCart} product={mockAProduct} />)

        screen.debug();
    })
})
