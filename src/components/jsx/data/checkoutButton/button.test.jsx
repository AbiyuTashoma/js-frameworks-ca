import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutButton from ".";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('checkout button', () => {
    const mockNullLength = false
    const mockCartLength = true;
    const mockBtnName = "Checkout";
    const mockClass = "btn-class";
    const mockToLink = "/checkout";
    
    test('returns correct element', () => {
        render(
            <MemoryRouter initialEntries={['/product']}>
                <Routes>
                    <Route 
                        path='/product' 
                        element={
                            <CheckoutButton 
                                cartLength={mockNullLength} 
                                btnName={mockBtnName}
                                linkClass={mockClass} 
                                toLink={mockToLink} />
                            } 
                    />
                </Routes>  
            </MemoryRouter>
        );

        const bName = screen.queryByText('Checkout');
        expect(bName).toBeFalsy();

        render(
            <MemoryRouter initialEntries={['/product']}>
                <Routes>
                    <Route 
                        path='/product' 
                        element={
                            <CheckoutButton 
                                cartLength={mockCartLength} 
                                btnName={mockBtnName}
                                linkClass={mockClass} 
                                toLink={mockToLink} />
                            } 
                    />
                    <Route path='/checkout' element={ <div>Checkout page</div> } />
                </Routes>  
            </MemoryRouter>
        );

        const linkElement = screen.getByText('Checkout');
        expect(linkElement).toBeInTheDocument();
        fireEvent.click(linkElement);
        const pageElement = screen.getByText('Checkout page');
        expect(pageElement).toBeInTheDocument();
    });

})
