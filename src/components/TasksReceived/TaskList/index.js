import React, { useState } from 'react'
// -----------------------------------------------------------------------------
import { Container } from './styles'
import Searchbar from '~/components/Searchbar';
import TaskLine from '../TaskLine'
// -----------------------------------------------------------------------------
function TaskList({
  defaultTasks,
  handleTaskDetails, handleTest, handleListState,
  listState, load,
  // setHeaderMenu,
  selectedTaskId, setListState, setTask, setTasks,
  tasks,
  user_id,
}) {

  const [inputState, setInputState] = useState('');
  const [toggleName, setToggleName] = useState();
  const [toggleWorker, setToggleWorker] = useState();
  const [toggleStartDate, setToggleStartDate] = useState();
  const [toggleDueDate, setToggleDueDate] = useState();

  const selectArray = [
    { id: 1, tag: 'Due date' },
    { id: 2, tag: 'Title' },
    { id: 3, tag: 'User Name' },
    { id: 4, tag: 'Start Date' },
  ]

  async function handleSort(id) {
    const parsedId = parseInt(id)
    if (parsedId === 1) {
      sortDueDate()
      return
    }
    if (parsedId === 2) {
      sortName()
      return
    }
    if (parsedId === 3) {
      sortWorker()
      return
    }
    if (parsedId === 4) {
      sortStartDate()
      return
    }
  }

  function handleListState(number) {
    load('', user_id, number);
    setListState(number);
  }

  const handleUpdateInput = async (input) => {
    const filteredList = defaultTasks.filter(t => {
      let workerName = t.name + t.worker.worker_name
      return workerName.toLowerCase().includes(input.toLowerCase())
    })
    setTasks(filteredList)
    setInputState(input)
    setTask()
  }

  function sortName() {
    if (!toggleName) {
      tasks.sort(compare)
      setToggleName(!toggleName)
    }
    if (toggleName) {
      tasks.sort(reversedCompare)
      setToggleName(!toggleName)
    }
    // dispatch(updateTasks(new Date()))
    setToggleWorker(false);
    setToggleStartDate(false);  setToggleDueDate(false);
    setTask()

    function compare(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    }

    function reversedCompare(a, b) {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    }
  }

  function sortWorker() {
    if (!toggleWorker) {
      tasks.sort(compare)
      setToggleWorker(!toggleWorker)
    }
    if (toggleWorker) {
      tasks.sort(reversedCompare)
      setToggleWorker(!toggleWorker)
    }
    setToggleName(false);
    setToggleStartDate(false);  setToggleDueDate(false);  setTask()

    function compare(a, b) {
      if (a.worker.worker_name > b.worker.worker_name) {
        return 1;
      }
      if (a.worker.worker_name < b.worker.worker_name) {
        return -1;
      }
      return 0;
    }

    function reversedCompare(a, b) {
      if (a.worker.worker_name > b.worker.worker_name) {
        return -1;
      }
      if (a.worker.worker_name < b.worker.worker_name) {
        return 1;
      }
      return 0;
    }
  }

  function sortStartDate() {
    if (!toggleStartDate) {
      tasks.sort(compare)
      setToggleStartDate(!toggleStartDate)
    }
    if (toggleStartDate) {
      tasks.sort(reversedCompare)
      setToggleStartDate(!toggleStartDate)
    }
    setToggleName(false); setToggleWorker(false);
    setToggleDueDate(false);  setTask()

    function compare(a, b) {
      if (a.start_date > b.start_date) {
        return 1;
      }
      if (a.start_date < b.start_date) {
        return -1;
      }
      return 0;
    }

    function reversedCompare(a, b) {
      if (a.start_date > b.start_date) {
        return -1;
      }
      if (a.start_date < b.start_date) {
        return 1;
      }
      return 0;
    }
  }

  function sortDueDate() {
    if (!toggleDueDate) {
      tasks.sort(compare)
      setToggleDueDate(!toggleDueDate)
    }
    if (toggleDueDate) {
      tasks.sort(reversedCompare)
      setToggleDueDate(!toggleDueDate)
    }
    setToggleName(false); setToggleWorker(false);
    setToggleStartDate(false);  setTask()

    function compare(a, b) {
      if (a.due_date > b.due_date) {
        return 1;
      }
      if (a.due_date < b.due_date) {
        return -1;
      }
      return 0;
    }

    function reversedCompare(a, b) {
      if (a.due_date > b.due_date) {
        return -1;
      }
      if (a.due_date < b.due_date) {
        return 1;
      }
      return 0;
    }
  }
  //----------------------------------------------------------------------------
  return (
    <Container>
      <header className='list-header'>
        <div className="list-header-title-div">
          {/* <strong className="list-header-strong">Task List:</strong> */}
          {/* <div className="new-task-div">
            <button
              className="new-task-button"
              onClick={() => setHeaderMenu(6)}
            >New Task</button>
          </div> */}
        </div>

        <div className="sub-menu-div">
          <ul className="list-header-button-ul">
            { listState === 1
              ? (
                <li><button
                  className="list-header-button-selected"
                  onClick={() => handleListState(1)}
                >Open</button></li>
              )
              : (
                <li><button
                  className="list-header-button"
                  onClick={() => handleListState(1)}
                >Open</button></li>
              )

            }
            { listState === 2
              ? (
                <li><button
                  className="list-header-button-selected"
                  onClick={() => handleListState(2)}
                >Finished</button></li>
              )
              : (
                <li><button
                  className="list-header-button"
                  onClick={() => handleListState(2)}
                >Finished</button></li>
              )
            }
            { listState === 3
              ? (
                <li><button
                  className="list-header-button-selected"
                  onClick={() => handleListState(3)}
                >Canceled</button></li>
              )
              : (
                <li><button
                  className="list-header-button"
                  onClick={() => handleListState(3)}
                >Canceled</button></li>
              )
            }
          </ul>
        </div>

        <div className='list-header-div'>
          {/* Task selects */}
          <select
            className="header-select"
            onChange={e => handleSort(e.target.value)}
          >
            {selectArray.map(s =>
              <option
                key={s.id}
                className="list-option"
                value={s.id}
              >{s.tag}</option>
            )}
          </select>
          <div className="searchbar-div">
            <Searchbar
              className="header-input"
              input={inputState}
              onChange={handleUpdateInput}
              placeholder="Search Task"
            />
          </div>
        </div>
      </header>

      <ul className='item-list'>
        { tasks.map((t) =>
          <TaskLine
            key={t.id}
            handleTaskDetails={handleTaskDetails}
            handleTest={handleTest}
            selectArray={selectArray}
            t={t}
            selectedTaskId={selectedTaskId}
            user_id={user_id}
            load={load}
          />
        )}
      </ul>

      {/* <div className="title-bar">
        <strong className="title-strong" onClick={() => sortName()}>Tarefa
          { toggleName
            ? <TiArrowSortedUp style={{marginLeft: '8px'}}/>
            : <TiArrowSortedDown style={{marginLeft: '8px', alignSelf: 'center'}}/>
          }
        </strong>
        <strong className='title-strong' onClick={() => sortWorker()} style={{cursor:'pointer'}}>Funcionário
          { toggleWorker
            ? <TiArrowSortedUp style={{marginLeft: '8px'}}/>
            : <TiArrowSortedDown style={{marginLeft: '8px', alignSelf: 'center'}}/>
          }
        </strong>
        <strong className='short-tag' onClick={() => sortPrior()} style={{cursor:'pointer'}}>Prioridade
        { togglePrior
            ? <TiArrowSortedUp style={{marginLeft: '8px'}}/>
            : <TiArrowSortedDown style={{marginLeft: '8px', alignSelf: 'center'}}/>
          }
        </strong>
        <strong className='short-tag' onClick={() => sortUrgent()} style={{cursor:'pointer'}}>Urgência
          { toggleUrgent
            ? <TiArrowSortedUp style={{marginLeft: '8px'}}/>
            : <TiArrowSortedDown style={{marginLeft: '8px', alignSelf: 'center'}}/>
          }
        </strong>
        <strong className='short-tag'onClick={() => sortStartDate()} style={{cursor:'pointer'}}>Início
          { toggleStartDate
            ? <TiArrowSortedUp style={{marginLeft: '8px'}}/>
            : <TiArrowSortedDown style={{marginLeft: '8px', alignSelf: 'center'}}/>
          }
        </strong>
        <strong className='short-tag' onClick={() => sortDueDate()} style={{cursor:'pointer'}}>Prazo
          { toggleDueDate
            ? <TiArrowSortedUp style={{marginLeft: '8px'}}/>
            : <TiArrowSortedDown style={{marginLeft: '8px', alignSelf: 'center'}}/>
          }
        </strong>

      </div> */}

      {/* Task List */}
    </Container>
  )
}

export default TaskList
