import { render, screen, fireEvent } from "@testing-library/react";
import { TaskInput } from "../TaskInput";
import { INPUT_DEFAULT_MSG } from "../../constants";

describe("TaskInput", () => {
  test("renders input field", () => {
    render(<TaskInput addTask={jest.fn()} />);
    const inputElement = screen.getAllByPlaceholderText(INPUT_DEFAULT_MSG)[0];
    expect(inputElement).toBeInTheDocument();
  });

  test("calls addTask when form is submitted", () => {
    const mockAddTask = jest.fn();
    render(<TaskInput addTask={mockAddTask} />);
    
    const inputElement = screen.getAllByPlaceholderText(INPUT_DEFAULT_MSG)[0];

    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.keyDown(inputElement, {key: 'Enter', code: 'Enter', charCode: 13})

    expect(mockAddTask).toHaveBeenCalledWith(expect.objectContaining({ name: "New Task" }));
    expect(mockAddTask).toHaveBeenCalledTimes(1);
  });

  test("clears input field after submission", () => {
    const mockAddTask = jest.fn();
    render(<TaskInput addTask={mockAddTask} />);
    
    const inputElement = screen.getAllByPlaceholderText(INPUT_DEFAULT_MSG)[0];
    inputElement.focus();

    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.keyDown(inputElement, {key: 'Enter', code: 'Enter', charCode: 13})
    expect(inputElement).toHaveValue("");
  });
});