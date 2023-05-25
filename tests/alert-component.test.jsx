import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { Alert } from "../src/components/Alert.jsx"

describe('Component Styling : Alert', () => {
    
    it('renders error alert correctly', () => {
        render(<Alert severity="error">This is an error alert — check it out!</Alert>);
        const alertElement = screen.getByText('This is an error alert — check it out!');

        expect(alertElement).toBeInTheDocument();
        expect(alertElement).toHaveStyle(`
          background-color: #F9C8C8;
        `);
        
    });

    it('renders warning alert correctly', () => {
        render(<Alert severity="warning">This is a warning alert — check it out!</Alert>);
        const alertElement = screen.getByText('This is a warning alert — check it out!');

        expect(alertElement).toBeInTheDocument();
        expect(alertElement).toHaveStyle(`
          background-color: #F9D9C8;
        `);
        
    });

    it('renders info alert correctly', () => {
        render(<Alert severity="info">This is an info alert — check it out!</Alert>);
        const alertElement = screen.getByText('This is an info alert — check it out!');

        expect(alertElement).toBeInTheDocument();
        expect(alertElement).toHaveStyle(`
          background-color: #F9EBC8;
        `);
        
    });

    it('renders success alert correctly', () => {
        render(<Alert severity="success">This is a success alert — check it out!</Alert>);
        const alertElement = screen.getByText('This is a success alert — check it out!');

        expect(alertElement).toBeInTheDocument();
        expect(alertElement).toHaveStyle(`
          background-color: #CEF7CD;
        `);
        
    });


});



