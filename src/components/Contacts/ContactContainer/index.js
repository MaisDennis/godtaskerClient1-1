import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux';
// -----------------------------------------------------------------------------
import { Container } from './styles';
import api from '~/services/api';
import ContactList from '../ContactList'
import ContactProfile from '../ContactProfile'
import EmptyContainer from '~/components/_EmptyContainer'
// -----------------------------------------------------------------------------
export default function ContactContainer() {
  const user_id = useSelector(state => state.user.profile.id);

  const [ contacts, setContacts ] = useState([]);
  const [ contact, setContact ] = useState('');
  const [defaultContacts, setDefaultContacts] = useState([]);
  const [countFollowers, setCountFollowers] = useState();
  const [followIndividual, setFollowIndividual] = useState();
  const [followButtonTrigger, setFollowButtonTrigger] = useState();

  useEffect(() => {
    loadWorkers('');
  },[]);

  async function loadWorkers(input) {
    const response = await api.get(`workers`, {
      params: {
        nameFilter: `${input}`,
      }
    })
    setContacts(response.data);
    setDefaultContacts(response.data);
  }

  async function handleContactSelect(c) {
    setContact(c)

    const followedResponse = await api.get(
      `/workers/${c.id}/followed/count`
    )

    const followIndividualResponse = await api.get(
      `/users/following/individual`, {
        params: { user_id: user_id, worker_id: c.id }
      }
    )

    setCountFollowers(followedResponse.data)
    setFollowIndividual(followIndividualResponse.data[0])
    setFollowButtonTrigger(!followButtonTrigger)
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      <ContactList
        contacts={contacts}
        defaultContacts={defaultContacts}
        handleContactSelect={handleContactSelect}
        setContacts={setContacts}
      />
    { contact
      ? (
        <ContactProfile
          contact={contact}
          countFollowers={countFollowers}
          followButtonTrigger={followButtonTrigger}
          followIndividual={followIndividual}
          setCountFollowers={setCountFollowers}
          setFollowButtonTrigger={setFollowButtonTrigger}
          setFollowIndividual={setFollowIndividual}
        />
      )
      : (
        <EmptyContainer/>
      )
    }
    </Container>
  )
}
