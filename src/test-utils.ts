import { ReactElement } from 'react';
import ReactDOM from 'react-dom';

// micro react-testing-library shim
// feel free to replace it for the real-deal

const roots: Set<HTMLElement> = new Set();

export const render = (
  element: ReactElement<any>,
  {
    container = document.createElement('div')
  }: { container?: HTMLElement } = {}
) => {
  roots.add(container);
  ReactDOM.render(element, container);
  return { container };
};

export const cleanup = () => {
  roots.forEach(container => {
    ReactDOM.unmountComponentAtNode(container);
    roots.delete(container);
  });
};
