import { render, screen, fireEvent } from "@testing-library/react";
import { TasksListFooter } from "../TasksListFooter";
import type { FilterType } from "../../types";

describe("TasksListFooter", () => {
  const mockFilter: FilterType = "all";
  const setFilterMock = jest.fn()

  test("renders filter buttons", () => {
    render(<TasksListFooter filter={mockFilter} setFilter={setFilterMock} activeTasksLeft={0} />);
    const completedFilterButton = screen.getByTestId("completed-btn");
    const activeFilterButton = screen.getByTestId("active-btn");
    const allFilterButton = screen.getByTestId("all-btn");
    expect(completedFilterButton).toBeInTheDocument();
    expect(activeFilterButton).toBeInTheDocument();
    expect(allFilterButton).toBeInTheDocument();
  });

  test("calls setFilter when active filter button is clicked", () => {
    render(<TasksListFooter filter={mockFilter} setFilter={setFilterMock} activeTasksLeft={0} />);
    const completedButton = screen.getByTestId("active-btn");
    fireEvent.click(completedButton);
    expect(setFilterMock).toHaveBeenCalledWith("active");
    expect(setFilterMock).toHaveBeenCalledTimes(1);
  });

  test("displays not completed task number", () => {
    const activeTasksLeft = 1;
    render(<TasksListFooter filter={mockFilter} setFilter={setFilterMock} activeTasksLeft={activeTasksLeft} />);
    const taskNameElement = screen.getByTestId("active-tasks-left-id");
    expect(taskNameElement).toHaveTextContent(activeTasksLeft.toString());
  });
});