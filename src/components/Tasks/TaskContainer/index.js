import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'
// -----------------------------------------------------------------------------
import { Container } from './styles';
import EmptyContainer from '~/components/_EmptyContainer'
import TasksEdit from '../../TasksEdit';
import TaskList from '../TaskList'
import TaskDetails from '../TaskDetails';
import api from '~/services/api';
// -----------------------------------------------------------------------------
export default function TaskContainer({ setHeaderMenu }) {
  const user_id = useSelector(state => state.user.profile.id)

  const [defaultTasks, setDefaultTasks] = useState([]);
  const [listState, setListState] = useState(1);
  const [selectedTaskId, setSelectedTaskId] = useState();
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState();

  let response = null

  useEffect(() => {
    load('', user_id, 1);
  }, []);

  async function load(workerNameFilter, userID, listState) {
    switch(listState) {
      case(1):
        response = await api.get(`tasks/user/unfinished`, {
          params: { workerNameFilter, userID }
        })
        setTasks(response.data); setDefaultTasks(response.data);
        setTask(response.data[0]); setSelectedTaskId(response.data[0] && response.data[0].id);
        break
      case(2):
        response = await api.get(`tasks/user/finished`, {
          params: { workerNameFilter, userID }
        })
        setTasks(response.data); setDefaultTasks(response.data);
        setTask(response.data[0]); setSelectedTaskId(response.data[0] && response.data[0].id);
        break
      case(3):
        response = await api.get(`tasks/user/canceled`, {
          params: { workerNameFilter, userID }
        })
        setTasks(response.data); setDefaultTasks(response.data);
        setTask(response.data[0]); setSelectedTaskId(response.data[0] && response.data[0].id);
        break
      case(4):
        response = await api.get(`tasks`, {
          params: { workerNameFilter, userID }
        })
        setTasks(response.data); setDefaultTasks(response.data);
        setTask(response.data[0]); setSelectedTaskId(response.data[0] && response.data[0].id);
        break
      default:
        response = await api.get(`tasks/user/unfinished`, {
          params: { workerNameFilter, userID }
        })
        setTasks(response.data); setDefaultTasks(response.data);
        setTask(response.data[0]);
    }
  }

  async function handleTaskDetails(t) {
    setSelectedTaskId(t.id)
    let editedSubTaskList = t.sub_task_list;

    if (editedSubTaskList) {
      await editedSubTaskList.map((s) => {
        if(s.user_read === false) {
          s.user_read = true;
        }
        return s
      })
    }

    await api.put(`tasks/${t.id}`, {
      sub_task_list: editedSubTaskList,
    })
    setTask(t);
  }

  // ---------------------------------------------------------------------------
  return (
    <Container>
      { editTask
        ? (
          <TasksEdit
            task={task}
            setEditTask={setEditTask}
          />
        )
        : (
          <>
            <TaskList
              defaultTasks={defaultTasks}
              handleTaskDetails={handleTaskDetails}
              listState={listState}
              load={load}
              selectedTaskId={selectedTaskId}
              setHeaderMenu={setHeaderMenu}
              setListState={setListState}
              setTask={setTask}
              setTasks={setTasks}
              task={task}
              tasks={tasks}
              user_id={user_id}
            />

            { task
              ? (
                <TaskDetails
                  listState={listState}
                  load={load}
                  setEditTask={setEditTask}
                  task={task}
                  user_id={user_id}
                />
              )
              : (
                <EmptyContainer/>
              )
            }
          </>
        )
      }
    </Container>
  )
}
