import React, { useState, useRef, useEffect } from 'react'
import { format, parseISO, isBefore } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MdNotifications } from 'react-icons/md';
// -----------------------------------------------------------------------------
import { Container, Badge } from './styles';
import firebase from '~/services/firebase'
import api from '~/services/api';
import insert from '~/assets/insert_photo-24px.svg';

export default function TaskLine({
  handleTaskDetails, handleSelect,
  load,
  selectArray, selectedTaskId,
  t,
  user_id,
}) {
  const messageInputRef = useRef();
  const [messages, setMessages] = useState();

  useEffect(() => {
    getMessages();
  }, [])

  const formattedDate = fdate =>
  fdate == null
    ? ''
    : format(parseISO(fdate), "dd'/'MMM'/'yyyy", { locale: ptBR });

  const firestore = firebase.firestore()
  const messagesRef = firestore.collection(`messages/task/${t.id}`)

  async function getMessages() {
    const unsubscribe = await messagesRef
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {

        const data = querySnapshot.docs.map(d => ({
          ...d.data(),
        }));
        setMessages(data)
      })
    return unsubscribe;
  }

  async function handleSelect(e, id, taskAttributes, radioType) {
    let editedTaskAttributes = []
    if(radioType === 'Prior') {
      editedTaskAttributes = [
        e.target.value,
        taskAttributes[1],
        taskAttributes[2],
      ]
    } else {
      editedTaskAttributes = [
        taskAttributes[0],
        e.target.value,
        taskAttributes[2],
      ]
    }

    await api.put(`tasks/${id}`, {
      task_attributes: editedTaskAttributes
    });

    load('', user_id, 1);
  }

  const handleStatus = (sub_task_list) => {
    let weigeSum = 0;
    for(let i = 0; i < sub_task_list.length; i++) {
      if(sub_task_list[i].complete === true) {
        weigeSum += (sub_task_list[i].weige_percentage)
      }
    }
    return Math.round(weigeSum)
  }

  const hasUnread = (array) => {
    try {
      let sum = 0;
      for(let i = 0; i < array.length; i++) {
        if(array[i].user_read === false) {
          sum += 1
        }
      }
      return sum
    }
    catch(error) {
      return
    }
  }
  // ---------------------------------------------------------------------------
  return (
    <Container key={t.id} className='item-list-row'>
      { t.end_date || t.canceled_at
        ? (
          <>
            { selectedTaskId === t.id
              ? (
                <div
                  className="line-div canceled selected"
                  onClick={() => handleTaskDetails(t)}
                >
                  <div className="left-div">
                    <img
                      className="image-logo"
                      src={insert}
                      alt="gerenteDash"
                    />
                  </div>
                  <div className="center-div">
                    <label className="item-label">{t.name}</label>
                    <label className="item-label">{t.worker.worker_name}</label>

                    {/* Task Dates */}
                    <div className="dates-div">
                      <label className="startdate">{formattedDate(t.start_date)}</label>
                      <label className="startdate">{formattedDate(t.due_date)}</label>
                    </div>
                    {/* Task Status */}
                    <label className="status-label">
                      { t.end_date && isBefore(parseISO(t.end_date), parseISO(t.due_date)) &&
                        (
                          <label className="duedate red">
                            {`Finalizada ${formattedDate(t.end_date)}`}
                          </label>
                        )

                      }
                      { t.end_date && isBefore(parseISO(t.due_date), parseISO(t.end_date)) &&
                        (
                          <label className="duedate green">
                            {`Finalizada ${formattedDate(t.end_date)}`}
                          </label>
                        )

                      }
                      { t.canceled_at && (
                        <div>
                          {`Cancelada ${formattedDate(t.canceled_at)}`}
                        </div>
                      )}
                      { !t.end_date && !t.canceled_at && (
                        <div className="status-test-div">
                          <div className="status-complete-div">
                            <div
                              className="status-incomplete-div"
                              style={{"width": `${handleStatus(t.sub_task_list)}%`}}
                            ></div>
                          </div>
                          <span className="status-span">
                            {handleStatus(t.sub_task_list)}%
                          </span>
                        </div>
                      )}
                    </label>
                  </div>
                  <div className="right-div">
                    {/* Task Bells */}
                    <div className="bell-label">
                      { (hasUnread(t.sub_task_list) === 0)
                        ? (
                          <Badge
                            style={{visibility: 'hidden'}}
                            value={hasUnread(t.sub_task_list)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                        : (
                          <Badge
                            hasUnread={hasUnread(t.sub_task_list)}
                            value={hasUnread(t.sub_task_list)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                      }
                    </div>
                    <div className="bell-label last">
                      { (hasUnread(messages) === 0)
                      // { !t.score
                        ? (
                          <Badge
                            style={{visibility: 'hidden'}}
                            value={hasUnread(messages)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                        : (
                          <Badge
                            hasUnread={hasUnread(messages)}
                            value={hasUnread(messages)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                      }
                    </div>
                  </div>
                </div>
              )
              : (
                <div
                  className="line-div canceled"
                  onClick={() => handleTaskDetails(t)}
                >
                  <div className="left-div">
                    <label className="item-label">{t.name}</label>
                    <label className="item-label">{t.worker.worker_name}</label>
                  </div>

                  <div className="center-div">
                    {/* Task selects */}
                    <label className="short-label">{t.task_attributes[0]}</label>
                    <label className="short-label">{t.task_attributes[1]}</label>
                    {/* Task Dates */}
                    <label className="startdate">{formattedDate(t.start_date)}</label>
                    <label className="startdate">{formattedDate(t.due_date)}</label>
                    {/* Task Status */}
                    <label className="status-label">
                      { t.end_date && isBefore(parseISO(t.end_date), parseISO(t.due_date)) &&
                        (
                          <label className="duedate red">
                            {`Finalizada ${formattedDate(t.end_date)}`}
                          </label>
                        )

                      }
                      { t.end_date && isBefore(parseISO(t.due_date), parseISO(t.end_date)) &&
                        (
                          <label className="duedate green">
                            {`Finalizada ${formattedDate(t.end_date)}`}
                          </label>
                        )

                      }
                      { t.canceled_at && (
                        <div>
                          {`Cancelada ${formattedDate(t.canceled_at)}`}
                        </div>
                      )}
                      { !t.end_date && !t.canceled_at && (
                        <div className="status-test-div">
                          <div className="status-complete-div">
                            <div
                              className="status-incomplete-div"
                              style={{"width": `${handleStatus(t.sub_task_list)}%`}}
                            ></div>
                          </div>
                          <span className="status-span">
                            {handleStatus(t.sub_task_list)}%
                          </span>
                        </div>
                      )}
                    </label>
                  </div>

                  <div className="right-div">
                    {/* Task Bells */}
                    <div className="bell-label">
                      { (hasUnread(t.sub_task_list) === 0)
                        ? (
                          <Badge
                            style={{visibility: 'hidden'}}
                            value={hasUnread(t.sub_task_list)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                        : (
                          <Badge
                            hasUnread={hasUnread(t.sub_task_list)}
                            value={hasUnread(t.sub_task_list)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                      }
                    </div>
                    <div className="bell-label last">
                      { (hasUnread(messages) === 0)
                      // { !t.score
                        ? (
                          <Badge
                            style={{visibility: 'hidden'}}
                            value={hasUnread(messages)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                        : (
                          <Badge
                            hasUnread={hasUnread(messages)}
                            value={hasUnread(messages)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                      }
                    </div>
                  </div>
                </div>
              )
            }
          </>
        )
        : (
          <>
            { selectedTaskId === t.id
              ? (
                <div
                  className="line-div selected"
                  onClick={() => handleTaskDetails(t)}
                >
                  <div className="left-div">
                    <img
                      className="image-logo"
                      src={insert}
                      alt="gerenteDash"
                    />
                  </div>

                  <div className="center-div">
                    <div className="label-div">
                      <label className="task-label">{t.name}</label>
                      <label className="item-label">{t.worker.worker_name}</label>
                    </div>
                    {/* Task Dates */}
                    <div className="dates-div">
                      { t.initiated_at
                        ? (
                          // <label className="startdate green">{formattedDate(t.initiated_at)}</label>
                          <label className="startdate green">Started</label>
                        )
                        : (
                          // <label className="startdate">{formattedDate(t.start_date)}</label>
                          <label className="startdate">Sent</label>
                        )
                      }
                      <div className="due-date-div">
                        <label className="due-date-label">Due:</label>
                        { isBefore(parseISO(t.due_date), new Date())
                          ? <label className="duedate red">{formattedDate(t.due_date)}</label>
                          : <label className="duedate green">{formattedDate(t.due_date)}</label>
                        }
                      </div>
                    </div>
                    {/* Task Status */}
                    <label className="status-label">
                      { t.end_date && (
                        <div>
                          {`Finished ${formattedDate(t.end_date)}`}
                        </div>
                      )}
                      { t.canceled_at && (
                        <div>
                          {`Canceled ${formattedDate(t.canceled_at)}`}
                        </div>
                      )}
                      { !t.end_date && !t.canceled_at && (
                        <div className="status-test-div">
                          <div className="status-complete-div">
                            <div
                              className="status-incomplete-div"
                              style={{"width": `${handleStatus(t.sub_task_list)}%`}}
                            ></div>
                          </div>
                          <span className="status-span">
                            {handleStatus(t.sub_task_list)}%
                          </span>
                        </div>
                      )}
                    </label>
                  </div>

                  <div className="right-div">
                    {/* Task Bells */}
                    <div className="bell-label">
                      { (hasUnread(t.sub_task_list) === 0)
                        ? (
                          <Badge
                            style={{visibility: 'hidden'}}
                            value={hasUnread(t.sub_task_list)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                        : (
                          <Badge
                            hasUnread={hasUnread(t.sub_task_list)}
                            value={hasUnread(t.sub_task_list)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                      }
                    </div>
                    <div className="bell-label last">
                      { (hasUnread(messages) === 0)
                      // { !t.score
                        ? (
                          <Badge
                            style={{visibility: 'hidden'}}
                            // value={hasUnread(t.sub_task_list)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                        : (
                          <Badge
                            hasUnread={hasUnread(messages)}
                            value={hasUnread(messages)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                      }
                    </div>
                  </div>
                </div>
              )
              : (
                <div
                  className="line-div"
                  onClick={() => handleTaskDetails(t)}
                >
                  <div className="left-div">
                    <img
                      className="image-logo"
                      src={insert}
                      alt="gerenteDash"
                    />
                  </div>

                  <div className="center-div">
                    <label className="task-label">{t.name}</label>
                    <label className="item-label">{t.worker.worker_name}</label>
                    {/* Task Dates */}
                    <div className="dates-div">
                      { t.initiated_at
                        ? (
                          <label className="startdate green">Started</label>
                        )
                        : (
                          <label className="startdate">Sent</label>
                        )
                      }
                      <div className="due-date-div">
                        <label className="due-date-label">Due:</label>
                        { isBefore(parseISO(t.due_date), new Date())
                          ? <label className="duedate red">{formattedDate(t.due_date)}</label>
                          : <label className="duedate green">{formattedDate(t.due_date)}</label>
                        }
                      </div>
                    </div>
                    {/* Task Status */}
                    <label className="status-label">
                      { t.end_date && (
                        <div>
                          {`Finalizada ${formattedDate(t.end_date)}`}
                        </div>
                      )}
                      { t.canceled_at && (
                        <div>
                          {`Cancelada ${formattedDate(t.canceled_at)}`}
                        </div>
                      )}
                      { !t.end_date && !t.canceled_at && (
                        <div className="status-test-div">
                          <div className="status-complete-div">
                            <div
                              className="status-incomplete-div"
                              style={{"width": `${handleStatus(t.sub_task_list)}%`}}
                            ></div>
                          </div>
                          <span className="status-span">
                            {handleStatus(t.sub_task_list)}%
                          </span>
                        </div>
                      )}
                    </label>
                  </div>

                  <div className="right-div">
                    {/* Task Bells */}
                    <div className="bell-label">
                      { (hasUnread(t.sub_task_list) === 0)
                        ? (
                          <Badge
                            style={{visibility: 'hidden'}}
                            value={hasUnread(t.sub_task_list)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                        : (
                          <Badge
                            hasUnread={hasUnread(t.sub_task_list)}
                            value={hasUnread(t.sub_task_list)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                      }
                    </div>
                    {/* <div className="bell-label last">
                      { (hasUnread(messages) === 0)
                      // { !t.score
                        ? (
                          <Badge
                            style={{visibility: 'hidden'}}
                            // value={hasUnread(t.sub_task_list)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                        : (
                          <Badge
                            hasUnread={hasUnread(messages)}
                            value={hasUnread(messages)}
                            ref={messageInputRef}
                          >
                            <MdNotifications color="#ccc" size={28} />
                          </Badge>
                        )
                      }
                    </div> */}
                  </div>
                </div>
              )
            }
          </>
        )
      }
    </Container>
  )
}
