import { render, screen } from "@testing-library/react";
import { TasksList } from "../TasksList";

describe("TasksList", () => {
  const mockDate = new Date().toISOString();
  const mockTasks = [
    { id: "1", name: "Task 1", completed: false, createdAt: mockDate, modifiedAt: mockDate },
    { id: "2", name: "Task 2", completed: true, createdAt: mockDate, modifiedAt: mockDate },
  ];
  const mockOnToggleTask = jest.fn();

  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  })

  test("renders all tasks", () => {
    render(<TasksList tasks={mockTasks} toggleTask={mockOnToggleTask} />);
    const taskElements = screen.getAllByTestId(/tasks-list-item-\d/i);
    expect(taskElements).toHaveLength(2);
  });
});