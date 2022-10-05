import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from './test-utils';
import App from './App';

const MockApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

jest.mock('./redux/countries/api.js');

test('home page should fetch and render countries', async () => {
  render(<MockApp />);

  expect(await screen.findByText(/Test1/)).toBeInTheDocument();
});

test('details page should fetch and render country', async () => {
  render(<MockApp />);

  fireEvent.click(screen.getByText(/Test1/));

  expect(await screen.findByText(/Testing3/)).toBeInTheDocument();
});
