import './App.css';
import { useState } from 'react';
import { Task } from './types/Task';
import { TasksList } from './components/TasksList';
import { TaskInput } from './components/TaskInput';
import { Divider } from 'antd';
import Title from 'antd/es/typography/Title';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => setTasks(prev => ([...prev, task]));
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return (
    <div style={{ padding: 24, width: '100%', height: '100vh', boxSizing: 'border-box' }}>
      <Title level={2}>todos</Title>
      <div className="main">
        <TaskInput addTask={addTask}/>
        <Divider></Divider>
        <TasksList toggleTask={toggleTask} tasks={tasks} />
      </div>
    </div>
  )
}

export default App
