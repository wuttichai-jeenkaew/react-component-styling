import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { Button } from "../src/components/Button.jsx"



describe('Component Styling : Button', () => {
    it('renders primary button correctly', () => {
        render(<Button color="primary">Primary</Button>);
        const buttonElement = screen.getByRole('button');

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveStyle(`
          background-color: #074EE8;
        `);

    })

    it('renders secondary button correctly', () => {
        render(<Button color="secondary">Secondary</Button>);
        const buttonElement = screen.getByRole('button');

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveStyle(`         
          background-color: #07A4E8;
        `);

    });

});



