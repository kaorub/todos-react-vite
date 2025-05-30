import { Flex, Radio, type RadioChangeEvent } from "antd";
import type { FilterType } from "../types";

interface TasksListFooterProps {
    filter: string;
    activeTasksLeft: number;
    setFilter: (filter: FilterType) => void
}

export function TasksListFooter({ filter, activeTasksLeft, setFilter }: TasksListFooterProps) {
    const filterChange = (e: RadioChangeEvent) => {
        setFilter(e.target.value);
      };
    return <Flex justify="space-between">
        <div data-testid="active-tasks-left-id">{activeTasksLeft} items left</div>
        <Radio.Group value={filter} onChange={filterChange}>
            <Radio.Button value="all" data-testid="all-btn">All</Radio.Button>
            <Radio.Button value="active" data-testid="active-btn">Active</Radio.Button>
            <Radio.Button value="completed" data-testid="completed-btn">Completed</Radio.Button>
        </Radio.Group>
    </Flex>
}