import { fireEvent, render, screen } from "@testing-library/react";
import Contact from ".";

describe('Contact ()', () => {  
    test('displays error if not valid', () => {

        const mockName = 'name';
        const mockEmail = 'name@noroff.no';
        const mockSubject = 'submission';
        const mockMessage = 'Love working with react';

        render(<Contact />);

        const name = screen.getByLabelText('Full name');
        const email = screen.getByLabelText('Email');
        const subject = screen.getByLabelText('Subject');
        const message = screen.getByLabelText('Message');
        const submitButton = screen.getByRole('button');

        expect(name.value).toBe('');
        expect(email.value).toBe('');
        expect(subject.value).toBe('');
        expect(message.value).toBe('');
        expect(submitButton).toBeInTheDocument;
        expect(submitButton).toHaveAttribute('type', 'submit');

        fireEvent.change(name, {target: {value: mockName}});
        fireEvent.change(email, {target: {value: mockEmail}});
        fireEvent.change(subject, {target: {value: mockSubject}});
        fireEvent.change(message, {target: {value: mockMessage}});

        expect(name.value).toBe('name');
        expect(email.value).toBe('name@noroff.no');
        expect(subject.value).toBe('submission');
        expect(message.value).toBe('Love working with react');
    })
})