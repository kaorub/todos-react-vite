import { useState } from "react";
import { Input, message, type InputProps } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { INPUT_DEFAULT_MSG, INPUT_MAX_LENGTH, NOTIFICATION_TASK_ADDED, WARNING_EMPTY_TXT } from "../constants";
import { Task } from "../types/Task";

interface TaskInputProps {
    addTask: (task: Task) => void;
}

export function TaskInput({ addTask }: TaskInputProps) {
    const [ value, setValue ] = useState('');

    const createTask = (name: string) => {
        const newTask = new Task(name);
        addTask(newTask);
        setValue('');
        message.success(NOTIFICATION_TASK_ADDED);
      }

    const onPressEnter: InputProps["onPressEnter"] = (event) => {
        if (!value.trim()) {
            message.warning(WARNING_EMPTY_TXT);
            return;
          }
        const target = event.target as HTMLInputElement;
        createTask(target.value);
    }
    const onChange: InputProps["onChange"] = (event) => {
        const target = event.target as HTMLInputElement;
        setValue(target.value);
    }
    return <Input
            id="task-input-id"
            value={value}
            onChange={onChange}
            placeholder={INPUT_DEFAULT_MSG}
            prefix={<ArrowDownOutlined/>}
            maxLength={INPUT_MAX_LENGTH}
            onPressEnter={onPressEnter}
        />
}