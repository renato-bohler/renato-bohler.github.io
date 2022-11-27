import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';

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
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
