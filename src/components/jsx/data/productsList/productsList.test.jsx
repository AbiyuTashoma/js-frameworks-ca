import { screen, render, fireEvent } from "@testing-library/react";
import ProductsList from ".";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { mockProducts } from "./productsMock";

describe('ProductsList ()', () => {

    test('it displays all products', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route index element={ProductsList(mockProducts)} />
                </Routes>
            </MemoryRouter>
        );

        const mockLength = mockProducts.length;

        const images = screen.getAllByRole('img');
        const titles = screen.getAllByTitle('product-title');
        const viewButtons = screen.getAllByText('View');

        expect(images).toHaveLength(mockLength);
        expect(titles).toHaveLength(mockLength);
        expect(viewButtons).toHaveLength(mockLength);

        images.map((image, index) => {
            expect(image).toHaveAttribute('src', mockProducts[index]['image']['url']);
        });

        titles.map((title, index) => {
            expect(title).toHaveTextContent(mockProducts[index].title);
        });

        viewButtons.map((button, index) => {
            expect(button).toHaveAttribute('href', '/' + mockProducts[index].id);
        });
    });
})