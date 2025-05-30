import { Checkbox, type CheckboxProps } from "antd";
import type { Task } from "../types/Task";

interface TaskItemProps {
    task: Task;
    toggleTask: (id: string) => void;
}

export function TaskItem({ task, toggleTask }: TaskItemProps) {
    const onChange: CheckboxProps["onChange"] = () => {
        toggleTask(task.id)
    }

    return <Checkbox
            data-testid={`task-item-checkbox-${task.id}`}
            checked={task.completed}
            defaultChecked={false}
            onChange={onChange}
            className={task.completed ? "completed" : ""}
            // style={{ textDecoration: task.completed ? 'line-through' :'none' }}
        >
            {task.name}
        </Checkbox>
}