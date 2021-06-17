import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';
// -----------------------------------------------------------------------------
import { Container } from './styles';
import insert from '~/assets/insert_photo-24px.svg';
import api from '~/services/api';
// -----------------------------------------------------------------------------
export default function ContactProfile({
  contact, countFollowers,
  followButtonTrigger,
  followIndividual,
  setCountFollowers,
  setFollowButtonTrigger,
  setFollowIndividual,
}) {
  const user_id = useSelector(state => state.user.profile.id);

  useEffect(() => {
    loadData()
  }, [followButtonTrigger])

  async function loadData() {
    const followedResponse = await api.get(
      `/workers/${contact.id}/followed/count`
    )

    const followIndividualResponse = await api.get(
      `/users/following/individual`, {
        params: { user_id: user_id, worker_id: contact.id }
      }
    )
    setCountFollowers(followedResponse.data)
    setFollowIndividual(followIndividualResponse.data[0])
  }

  async function handleStartFollow() {
    await api.post(
      `/users/${user_id}/following`, {
        worker_id: contact.id,
      }
    )

    const followIndividualResponse = await api.get(
      `/users/following/individual`, {
        params: { user_id: user_id, worker_id: contact.id }
      }
    )

    const followedResponse = await api.get(
      `/workers/${contact.id}/followed/count`
    )

    setCountFollowers(followedResponse.data)
    setFollowIndividual(followIndividualResponse.data[0])
    setFollowButtonTrigger(!followButtonTrigger)
  }

  async function handleStopFollow() {
    await api.put(
      `/users/${user_id}/following`, {
        worker_id: contact.id,
      }
    )

    const followIndividualResponse = await api.get(
      `/users/following/individual`, {
        params: { user_id: user_id, worker_id: contact.id }
      }
    )

    const followedResponse = await api.get(
      `/workers/${contact.id}/followed/count`
    )

    setCountFollowers(followedResponse.data)
    setFollowIndividual(followIndividualResponse.data[0])
    setFollowButtonTrigger(!followButtonTrigger)
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      <div className="profile-header">
        { followIndividual !== undefined
          ? (
            <button
              className="following-button"
              onClick={handleStopFollow}
            >Following</button>
          )
          : (
            <button
              className="follow-button"
              onClick={handleStartFollow}
            >Follow</button>
          )
        }
      </div>

      <div className="header">
        <div className="left-div">
          <div className="image-background">
            { contact === undefined || contact.avatar === null
            ? <img
                className="profile-image"
                src={insert}
                alt="Worker"
              />
            : <img
                className="profile-image"
                src={contact.avatar.url}
                alt="Worker"
              />
          }
          </div>

        </div>
        <div className="center-div">
          <label className="user-name">{contact.worker_name}</label>
          <div className="name-div">
            <label className="name-label">{contact.first_name}</label>
            <label className="name-label">{contact.last_name}</label>
          </div>
          <div className="followers-div">
            <div className="followers-tag">
              <label htmlFor="" className="number-label">{countFollowers}</label>
              <label htmlFor="" className="followers-label">Followers</label>
            </div>
            <div className="followers-tag">
              <label htmlFor="" className="number-label">???</label>
              <label htmlFor="" className="followers-label">Following</label>
            </div>

          </div>
        </div>
      </div>

      <div className="body">
        <div className="social-media-div">
          <div className="social-media-tag">
            <FiInstagram color="#18A0FB" size={20} />
            <label className="social-media-label">@mais.dennis</label>
          </div>
          <div className="social-media-tag">
            <FiLinkedin color="#18A0FB" size={20} />
            <label className="social-media-label">@mais.dennis</label>
          </div>
        </div>

        <div className="bio-wrapper">
          <label className="bold-label">Bio:</label>
          <div className="bio-div">
            <div className="bio-text">
              { contact.bio != null
                ? (
                  <label className="followers-label">{contact.bio}</label>
                )
                : (
                  <label className="followers-label">-</label>
                )
              }
            </div>
          </div>
        </div>

      </div>
    </Container>
  )
}
