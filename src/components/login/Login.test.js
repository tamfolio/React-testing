import { fireEvent, render,screen } from "@testing-library/react"
import Login from "./Login"

test('username input should be rendered', () => {
    render(<Login/>);
    const userInputEl = screen.getByPlaceholderText(/username/i);
    expect(userInputEl).toBeInTheDocument();
})

test('password input should be rendered', () => {
    render(<Login/>);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEl).toBeInTheDocument();
})

test('button  should be rendered', () => {
    render(<Login/>);
    const buttonInputEl = screen.getByRole('button');
    expect(buttonInputEl).toBeInTheDocument();
})

test('username input should be empty', () => {
    render(<Login/>);
    const userInputEl = screen.getByPlaceholderText(/username/i);
    expect(userInputEl.value).toBe("");
})

test('password input should be empty', () => {
    render(<Login/>);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEl.value).toBe("");
})

test('button  should be disabled', () => {
    render(<Login/>);
    const buttonInputEl = screen.getByRole('button');
    expect(buttonInputEl).toBeDisabled();
})

test('loading should not  be rendered', () => {
    render(<Login/>);
    const buttonInputEl = screen.getByRole('button');
    expect(buttonInputEl).not.toHaveTextContent(/Please wait/i);
})

test('error message should not be visible', () => {
    render(<Login/>);
    const error = screen.getByTestId('error');
    expect(error).not.toBeVisible();
})

test('username input should be changed', () => {
    render(<Login/>);
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const testValue = 'test'

    fireEvent.change(userInputEl, { target: {value: testValue}});
    expect(userInputEl.value).toBe(testValue);
})

test('password input should be changed', () => {
    render(<Login/>);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    const testValue = 'test'

    fireEvent.change(passwordInputEl, { target: {value: testValue}});
    expect(passwordInputEl.value).toBe(testValue);
})

test('button  should not be disabled when inputs exist', () => {
    render(<Login/>);
    const buttonInputEl = screen.getByRole('button');
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);

    const testValue = 'test'

    fireEvent.change(userInputEl, { target: {value: testValue}});
    fireEvent.change(passwordInputEl, { target: {value: testValue}});
    expect(buttonInputEl).not.toBeDisabled();
})

test('loading should be rendered when clicked', () => {
    render(<Login/>);
    const buttonInputEl = screen.getByRole('button');
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);

    const testValue = 'test'

    fireEvent.change(userInputEl, { target: {value: testValue}});
    fireEvent.change(passwordInputEl, { target: {value: testValue}});
    fireEvent.click(buttonInputEl)
    expect(buttonInputEl).not.toHaveTextContent(/Please wait/i);
})