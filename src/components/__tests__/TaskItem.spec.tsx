import { render, screen, fireEvent } from "@testing-library/react";
import { TaskItem } from "../TaskItem";

describe("TaskItem", () => {
  const mockDate = new Date().toISOString()
  const mockTask = { id: '1', name: "Test Task", completed: false, createdAt: mockDate, modifiedAt: mockDate};
  const mockOnToggleTask = jest.fn();

  test("renders task name", () => {
    const mockFn = jest.fn();
    render(<TaskItem task={mockTask} toggleTask={mockFn} />);
    const taskNameElement = screen.getByText("Test Task");
    expect(taskNameElement).toBeInTheDocument();
  });

  test("calls toggleTask when complete button is clicked", () => {
    render(<TaskItem task={mockTask} toggleTask={mockOnToggleTask} />);
    const taskNameElement = screen.getByText("Test Task");
    fireEvent.click(taskNameElement);
    expect(mockOnToggleTask).toHaveBeenCalledWith(mockTask.id);
    expect(mockOnToggleTask).toHaveBeenCalledTimes(1);
  });

  test("displays completed task with appropriate styling", () => {
    const completedTask= { ...mockTask, completed: true };
    render(<TaskItem task={completedTask} toggleTask={mockOnToggleTask} />);
    const taskInputElement = screen.getByText("Test Task");
    expect(taskInputElement.parentElement).toHaveClass("completed");
  });
});