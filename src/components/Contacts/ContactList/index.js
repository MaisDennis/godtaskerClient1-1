import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
//------------------------------------------------------------------------------
import { Container } from './styles'
import api from '~/services/api';
import Contact from '../Contact'
import Searchbar from '~/components/Searchbar';
//------------------------------------------------------------------------------
export default function ContactList({
  defaultContacts,
  contacts,
  handleContactSelect,
  setContacts,
}) {
  const [inputState, setInputState] = useState('');

  const handleUpdateInput = async (input) => {
    const filteredList = defaultContacts.filter(c => {
      let workerName = c.worker_name + c.first_name + c.last_name
      return workerName.toLowerCase().includes(input.toLowerCase())
    })
    setContacts(filteredList)
    setInputState(input)
  }
  //----------------------------------------------------------------------------
  return (
    <Container>
      <header className='contact-header'>
        {/* <div className="list-header-title-div">
          <strong className="list-header-strong">Search People:</strong>
        </div> */}

        <div className='list-header-div'>
          <Searchbar
            className="header-input"
            input={inputState}
            onChange={handleUpdateInput}
            placeholder="Search Contact"
          />
        </div>
      </header>

      {/* contacts */}
      <ul className='contact-list'>
        { contacts.map((c) =>
          // <div className="test">1</div>
          <Contact
            key={c.id}
            contact={c}
            handleContactSelect={handleContactSelect}
          />
        )}
      </ul>

    </Container>
  )
}
