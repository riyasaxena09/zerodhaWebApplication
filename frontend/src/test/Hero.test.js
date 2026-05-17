import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../landindPage/Home/Hero';
import '@testing-library/jest-dom/jest-globals';
    
describe('Hero Component', () => {
  test('renders the Hero component with correct content', () => {
    render(<Hero />);
    const heroImg=screen.getByAltText('Hero');
    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAttribute('src', 'media/images/homeHero.png');
  });

  test('renders the Signup button', () => {
    render(<Hero />);
    const signupButton = screen.getByRole('button', { name: /Sign Up/i });
    expect(signupButton).toBeInTheDocument();
  });
});
