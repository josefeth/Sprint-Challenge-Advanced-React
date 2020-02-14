import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayerList from './components/PlayerList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test('renders animal form header', () => {
//   const { getByText } = render(<App />);
//   const header = getByText(/hi/i);
//   expect(header).toBeInTheDocument();
// });

it('renders without crashing', () => {
  const h2 = document.createElement('h2');
  ReactDOM.render(<App />, h2);
  ReactDOM.unmountComponentAtNode(h2);
});

it('renders without crashing', () => {
  const p = document.createElement('p');
  ReactDOM.render(<App />, p);
  ReactDOM.unmountComponentAtNode(p);
});



// test('renders without crashing', () => {
//   // Arrange
//   const { getByText } = render(<App />);

//   // Act
//   const head = getByText(/hi/i);

//   // Assert
//   expect(head).toBeInTheDocument();
//   expect(head).toBeTruthy();
//   expect(head).not.toBeFalsy();
// });

// test('renders animal form header',()=>{
//   const { getByText} = render(<App />);
//   getByText(/hi/i)
//   })

// const element = wrapper.queryByText(/playerlist/i);
//   expect(element).toBeTruthy();
//   expect(element).toBeInTheDocument();
//   expect(element).toBeVisible();

// // //comment
//   wrapper.debug();


// it('renders correctly. truthy, in document, visible', () => {
//   const wrapper = rtl.render(
//     <App />
//   );
//   const element = wrapper.queryByText(/Name/i);
//   expect(element).toBeTruthy();
//   expect(element).toBeInTheDocument();
//   expect(element).toBeVisible();

// //comment
//   wrapper.debug();
// }); 

// test('Renders Header', () => {
//   const { getByText } = render(<App />);
//   const header = getByText(/hi/i);
//   // expect(header).toBeInTheDocument();
// })