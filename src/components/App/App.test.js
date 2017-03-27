import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

it('renders component correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    const component = renderer.create(<App />);
    expect(component).toMatchSnapshot(component);
});
