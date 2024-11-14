import '@testing-library/jest-dom'

import fetchMock from 'jest-fetch-mock';
global.ResizeObserver = global.ResizeObserver || class {
    constructor(callback: any) {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  

fetchMock.enableMocks();