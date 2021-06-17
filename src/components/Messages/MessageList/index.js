import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'

import 'firebase/firestore'
import 'firebase/auth'
//------------------------------------------------------------------------------
import Searchbar from '~/components/Searchbar';
import { Container } from './styles'
// import insert from '~/assets/insert_photo-24px.svg';
import MessageLine from '../MessageLine'
//------------------------------------------------------------------------------

function MessageList({ handleMessageSelect, messages }) {
  const [inputState, setInputState] = useState('');
  // const [items, setItems] = useState(messages)
  // const [defaultItems, setDefaultItems] = useState(messages)

  // const handleUpdateInput = async (input) => {
  //   const filteredList = defaultItems.filter(t => {
  //     let workerName = t.name + t.worker.worker_name
  //     return workerName.toLowerCase().includes(input.toLowerCase())
  //   })
  //   setItems(filteredList)
  //   setInputState(input)
  // }
  //----------------------------------------------------------------------------
  return (
    <Container>
      <header className='message-header'>
        <div className="list-header-title-div">
          {/* <strong className="list-header-strong">Messages:</strong> */}
          <ul className="list-header-button-ul">
            <li><button className="list-header-button" >Active Messages</button></li>
            <li><button className="list-header-button" >Following List</button></li>
          </ul>
        </div>

        <div className='list-header-div'>
          <Searchbar
            className="header-input"
            input={inputState}
            // onChange={handleUpdateInput}
            placeholder="Search Message"
          />
        </div>
      </header>

      {/* messages */}
      <ul className='message-list'>
        { messages.map((m) =>
          <MessageLine
            key={m.id}
            handleMessageSelect={handleMessageSelect}
            m={m}
          />
        )}
      </ul>
    </Container>
  )
}

export default MessageList
