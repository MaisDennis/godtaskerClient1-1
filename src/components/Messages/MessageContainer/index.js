import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import {
  // ptBR,
  enUS
} from 'date-fns/locale';
import 'firebase/firestore'
// -----------------------------------------------------------------------------
import { Container } from './styles'
import api from '~/services/api';
import firebase from '~/services/firebase'
import EmptyContainer from '~/components/_EmptyContainer'
import MessageDiv from '../MessageDiv'
import MessageList from '../MessageList'
// -----------------------------------------------------------------------------
export default function MessageContainer() {
  const user_id = useSelector(state => state.user.profile.id);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();
  // const [messageSelect, setMessageSelect] = useState();
  const [forwardValue, setForwardValue] = useState();

  const formattedMessageDate = fdate =>
  fdate == null
    ? ''
    : format(fdate, "MMM'/'dd'/'yyyy HH:mm", { locale: enUS });

  useEffect(() => {
    loadMessages()
  }, []);

  async function loadMessages() {
    const messagesResponse = await api.get(`messages/${user_id}`)
    setMessages(messagesResponse.data)
  }

  const firestore = firebase.firestore()

  async function handleMessageSelect(m) {
    // setMessageSelect(m.id)
    setMessage(m)
    // console.log(m)

    if (forwardValue) {
      const message_id = Math.floor(Math.random() * 1000000)

      await firestore.collection(`messages/chat/${message.chat_id}`).add({
        id: message_id,
        message: forwardValue,
        sender: "user",
        user_read: true,
        worker_read: false,
        timestamp: formattedMessageDate(new Date()),
        forward_message: true,
        visible: true,
      createdAt: new Date(),
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.log("Error writing document: ", error);
      });

      setForwardValue();
    }
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      <MessageList
        messages={messages}
        handleMessageSelect={handleMessageSelect}
      />
      { message ?
        (
          <MessageDiv
            loadMessages={loadMessages}
            message={message}
            setForwardValue={setForwardValue}
          />
        )
        : (
          <EmptyContainer/>
        )
      }
    </Container>
  )
}
