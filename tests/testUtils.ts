/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from '@testing-library/react';
import { Providers } from '../src/providers/Providers';

const customRender = (ui: React.ReactElement, options?: any) => {
  return render(ui, { wrapper: Providers, ...options });
};

export * from '@testing-library/react';
export { customRender as render };