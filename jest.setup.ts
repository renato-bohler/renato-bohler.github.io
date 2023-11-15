import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';

import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;

jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: (loader: () => unknown) => {
    const { default: actual } = jest.requireActual('next/dynamic');

    const RequiredComponent = actual(loader);
    if (RequiredComponent.preload) RequiredComponent.preload();
    else RequiredComponent.render.preload();

    return RequiredComponent;
  },
}));

Object.defineProperty(window, 'IntersectionObserver', {
  value: class IntersectionObserver {
    disconnect() {
      return null;
    }

    observe() {
      return null;
    }

    takeRecords() {
      return null;
    }

    unobserve() {
      return null;
    }
  },
});

Object.defineProperty(window, 'matchMedia', {
  value: jest.fn().mockImplementation((query) => ({
    addEventListener: jest.fn(),
    addListener: jest.fn(), // Deprecated
    dispatchEvent: jest.fn(),
    matches: false,
    media: query,
    onchange: null,
    removeEventListener: jest.fn(),
    removeListener: jest.fn(), // Deprecated
  })),
  writable: true,
});
