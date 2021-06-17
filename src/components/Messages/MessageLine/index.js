import React, { useState, useRef, useEffect } from 'react'
import { format, parseISO, isBefore } from 'date-fns';
import { ptBR } from 'date-fns/locale';
// -----------------------------------------------------------------------------
import { Container } from './styles';
// import { Line, Badge } from '~/pages/_layouts/list/styles';

import api from '~/services/api';
import insert from '~/assets/insert_photo-24px.svg';
import firebase from '~/services/firebase'
// -----------------------------------------------------------------------------
function MessageLine({
  handleMessageSelect, m
}) {
  const [messageBell, setMessageBell] = useState();
  const [lastMessage, setLastMessage] = useState();
  const [lastMessageTime, setLastMessageTime] = useState();

  useEffect(() => {
    getMessages()
  }, [])

  const firestore = firebase.firestore()
  const messagesRef = firestore
  .collection(`messages/chat/${m.chat_id}`)

  async function getMessages() {
    const unsubscribe = messagesRef
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map(d => ({
          ...d.data(),
        }));
        setMessageBell(data)
        let messagesLength = data.length

        const last_message = data[0]
          ? data[messagesLength-1].message
          : null
        setLastMessage(last_message)

        const last_message_time = data[0]
          ? data[messagesLength-1].timestamp
          : null
        setLastMessageTime(last_message_time)
        // lastMessageRef.current.scrollToEnd({ animated: false })
      })
      return unsubscribe;
  }

  // console.log(lastMessage)
  // ---------------------------------------------------------------------------

  return (
    <Container>
      <div
        className="line-div selected"
        onClick={() => handleMessageSelect(m)}
      >
        <div className="left-div">
          <img
            className="image-logo"
            src={insert}
            alt="gerenteDash"
          />
        </div>

        <div className="center-div">
          <div className="worker-div">
            <label className="worker-label">{m.worker.worker_name}</label>
          </div>

          {/* Last Message */}
          <div className="last-time-div">
            <label className="last-time-label">{lastMessageTime}</label>
          </div>
          <div className="last-message-div">
            <label className="last-message-label">{lastMessage}</label>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MessageLine;
