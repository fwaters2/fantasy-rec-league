import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import WelcomeScreen from '../src/pages/WelcomeScreen';
import renderer from 'react-test-renderer';
import {WELCOME_MESSAGE} from '../src/assets/constants';

test('Welcome Screen renders', () => {
  renderer.create(<WelcomeScreen />);
});

test('Welcome message is displayed', () => {
  const {getByTestId} = render(<WelcomeScreen />);
  const welcomeMessage = getByTestId('welcome-message');
  expect(welcomeMessage).toBeDefined();
  expect(welcomeMessage.children[0]).toEqual(WELCOME_MESSAGE);
});
describe('Code Input', () => {
  test('is found on the page', () => {
    const {getByTestId} = render(<WelcomeScreen />);
    const codeInput = getByTestId('code-input');
    expect(codeInput).toBeDefined();
  });
  test('user can change value', () => {
    const DUMMY_CODE = 'A12B19';
    const {getByTestId} = render(<WelcomeScreen />);
    const codeInput = getByTestId('code-input');
    fireEvent.changeText(codeInput, DUMMY_CODE);
    expect(codeInput.props.value).toBeDefined();
    expect(codeInput.props.value).toEqual(DUMMY_CODE);
  });
});

test('test 1 is found', () => {
  const {getByTestId} = render(<WelcomeScreen />);
  const codeInput = getByTestId('test-1');
  expect(codeInput).toBeDefined();
});
