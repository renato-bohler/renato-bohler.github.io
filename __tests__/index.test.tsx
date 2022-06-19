import React from 'react';

import { act, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import Index from '~/pages/index';

describe('Index', () => {
  it('does not crash', () => {
    render(<Index />);
  });

  it('renders the title', () => {
    render(<Index />);

    const title = screen.getByRole('heading', {
      name: 'Renato Böhler, frontend developer',
    });

    expect(title).toBeInTheDocument();
  });

  it('renders the navigation bar', () => {
    render(<Index />);

    const navigationBar = screen.getByRole('navigation');

    expect(navigationBar).toBeInTheDocument();
  });

  describe('sections', () => {
    it('renders the About section', () => {
      render(<Index />);

      const greeting = screen.getByRole('heading', {
        name: /about me$/i,
      });

      expect(greeting).toBeInTheDocument();
    });

    it('renders the Testimonials section', () => {
      render(<Index />);

      const testimonials = screen.getByRole('heading', {
        name: /what my colleagues have to say about me\?/i,
      });

      expect(testimonials).toBeInTheDocument();
    });

    it('renders the Skills section', () => {
      render(<Index />);

      const skills = screen.getByRole('heading', {
        name: /skills/i,
      });

      expect(skills).toBeInTheDocument();
    });
  });

  it('should pass a minimum a11y test', async () => {
    const { container } = render(<Index />);

    let results;
    await act(async () => {
      results = await axe(container);
    });

    expect(results).toHaveNoViolations();
  }, 30000);
});
