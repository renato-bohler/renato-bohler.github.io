import React from 'react';

import { act, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import Index from '~/pages/index';

const props = {
  repositories: [],
};

jest.mock('@fullstory/browser', () => ({
  init: jest.fn(),
  isInitialized: jest.fn(),
}));

describe('Index', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_LAST_UPDATED = new Date().toISOString();
  });

  it('does not crash', () => {
    render(<Index {...props} />);
  });

  it('renders the title', () => {
    render(<Index {...props} />);

    const title = screen.getByRole('heading', {
      name: 'Renato Böhler, frontend developer',
    });

    expect(title).toBeInTheDocument();
  });

  it('renders the navigation bar', () => {
    render(<Index {...props} />);

    const navigationBar = screen.getByRole('navigation');

    expect(navigationBar).toBeInTheDocument();
  });

  describe('sections', () => {
    it('renders the About section', () => {
      render(<Index {...props} />);

      const greeting = screen.getByText(/hello there/i);

      expect(greeting).toBeInTheDocument();
    });

    it('renders the Testimonials section', () => {
      render(<Index {...props} />);

      const testimonials = screen.getByRole('heading', {
        name: /what my colleagues have to say about me\?/i,
      });

      expect(testimonials).toBeInTheDocument();
    });

    it('renders the Skills section', () => {
      render(<Index {...props} />);

      const skills = screen.getByRole('heading', {
        name: /skills/i,
      });

      expect(skills).toBeInTheDocument();
    });

    it('renders the Projects section', () => {
      render(<Index {...props} />);

      const projects = screen.getByRole('heading', {
        name: /personal projects/i,
      });

      expect(projects).toBeInTheDocument();
    });
  });

  it('should pass a minimum a11y test', async () => {
    const { container } = render(<Index {...props} />);

    let results;
    await act(async () => {
      results = await axe(container);
    });

    expect(results).toHaveNoViolations();
  }, 30000);
});
