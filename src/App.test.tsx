import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createMemoryHistory } from '@remix-run/router';
import { BrowserRouter, Router } from 'react-router-dom';


jest.mock("./components/Header", () => () => {
  return <div>HeaderComponent</div>;
});
jest.mock("./pages/Home", () => () => {
  return <div>HomeComponent</div>;
});
jest.mock("./pages/Podcast", () => () => {
  return <div>PodcastComponent</div>;
});

describe("App Component", () => {

  test('renders content', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>, {wrapper: BrowserRouter}
    );
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(container).toHaveTextContent('HeaderComponent')
    expect(container).toHaveTextContent('HomeComponent')
    expect(container).not.toHaveTextContent('PodcastComponent')
  })
    
  test("navigating podcast", () => {
    const history = createMemoryHistory()
    history.push('/podcast/001');
    const { container } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(container).toHaveTextContent('HeaderComponent')
    expect(container).not.toHaveTextContent('HomeComponent')
    expect(container).toHaveTextContent('PodcastComponent')
  })

})
