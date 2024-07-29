import { render, screen } from "@testing-library/react";
import CheckoutButton from ".";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('checkout button', () => {
    const mockCartLength = true;
    const mockBtnName = "Checkout";
    const mockClass = "btn-class";
    const mockToLink = "/checkout";
    
    test('returns correct element', () => {
        render(
            <MemoryRouter initialEntries={['/checkout']}>
                <Routes>
                    <Route 
                        path='/checkout' 
                        element={
                            <CheckoutButton 
                                cartLength={mockCartLength} 
                                btnName={mockBtnName}
                                linkClass={mockClass} 
                                toLink={mockToLink} />
                            } 
                    />
                </Routes>  
            </MemoryRouter>
        );

        screen.debug();

        const linkElement1 = screen.getByText('Checkout');
        expect(linkElement1).toBeInTheDocument();

        render(
            <MemoryRouter initialEntries={['/checkout']}>
                <Routes>
                    <Route 
                        path='/checkout' 
                        element={
                            <CheckoutButton 
                                cartLength={mockCartLength} 
                                btnName="new button"
                                linkClass={mockClass} 
                                toLink={mockToLink} />
                            } 
                    />
                </Routes>  
            </MemoryRouter>
        );

        screen.debug();

        const linkElement2 = screen.getByText('new button');
        expect(linkElement2).toBeInTheDocument();

        // const href1 = screen.findByRole("a");
        // expect(href1.href).toEqual("/checkout");
    });

})

{/* <CheckoutButton cartLength={true} linkClass={'btn-class'} toLink={'/home'} /> */}