import { Empty, List } from 'antd';
import { Task } from '../types/Task';
import { TaskItem } from './TaskItem';
import { TasksListFooter as Footer } from './TasksListFooter';
import { useEffect, useState } from 'react';
import type { FilterType } from '../types';

interface TasksListProps {
    tasks: Task[];
    toggleTask: (id: string) => void;
}

export function TasksList({ tasks = [], toggleTask }: TasksListProps) {
    const [filter, setFilter ] = useState<FilterType>('all');
    const [filteredTasks, setFilteredTasks ] = useState<Task[]>([]);
    const [activeTasks, setActiveTasks ] = useState<Task[]>([]);

    useEffect(() => {
        const filteredTasks = tasks.filter(task => {
            if (filter === 'completed') return task.completed;
            if (filter === 'active') return !task.completed;
            return true;
          });

        setFilteredTasks(filteredTasks)
    
        const activeTasks = tasks.filter(task => !task.completed);
        setActiveTasks(activeTasks);
    }, [tasks, filter])

    return (
        <List
            data-testid="tasks-list-id"
            footer={<Footer activeTasksLeft={activeTasks.length} filter={filter} setFilter={setFilter} />}
            bordered
            dataSource={filteredTasks}
            locale={{ emptyText: <Empty description={""}/> }}
            renderItem={(task) => (
                <List.Item key={task.id} data-testid={`tasks-list-item-${task.id}`}>
                    <TaskItem
                        task={task}
                        toggleTask={toggleTask}
                    ></TaskItem>
                </List.Item>
              )}
        >
        </List>
    )
}