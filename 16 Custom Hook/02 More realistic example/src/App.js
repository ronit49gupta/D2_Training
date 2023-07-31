import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/useHttp';

function App() {
  const [tasks, setTasks] = useState([]);

  const {isLoading, error, sendRequest : fetchTasks } = useHttp();

  useEffect(() => {
    const transformTask = (taskDataObj) => {
      const loadedTasks = [];
  
      for (const taskKey in taskDataObj) {
        loadedTasks.push({ id: taskKey, text: taskDataObj[taskKey].text });
      }
  
      setTasks(loadedTasks);
    }
  
    fetchTasks(
      {url: 'https://react-udemy-course-project-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'},
      transformTask
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
