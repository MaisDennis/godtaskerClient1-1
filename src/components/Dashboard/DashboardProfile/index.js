import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';
// -----------------------------------------------------------------------------
import { Container } from './styles';
import insert from '~/assets/insert_photo-24px.svg';
import api from '~/services/api';
// -----------------------------------------------------------------------------
export default function DashboardProfile() {
  const reduxUser = useSelector(state => state.user.profile)
  const reduxWorker = useSelector(state => state.worker.profile)
  const user_id = reduxUser.id
  const worker_id = reduxWorker.id

  const [user, setUser] = useState([]);
  const [countFollowers, setCountFollowers] = useState();
  const [countFollowing, setCountFollowing] = useState();

  useEffect(() => {
    loadData()
  }, [])

  // console.log(user)
  async function loadData() {
    const userResponse = await api.get(`users/${user_id}`)

    const followingResponse = await api.get(`/users/${user_id}/following/count`)

    const followedResponse = await api.get(`/workers/${worker_id}/followed/count`)

    setUser(userResponse.data)
    setCountFollowers(followedResponse.data)
    setCountFollowing(followingResponse.data)
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      <div className="profile-header">
        {/* <button className="follow-button">Follow</button> */}
      </div>

      <div className="header">
        <div className="left-div">
          <Link to="/profile">
          <div className="image-background">
            { user === undefined || user.avatar === null || user.avatar === undefined
            ? <img
                className="profile-image"
                src={insert}
                alt="Worker"
              />
            : <img
                className="profile-image"
                src={user.avatar.url}
                alt="Worker"
              />
          }
          </div>
          </Link>
        </div>
        <div className="center-div">
          <label className="user-name">{user.user_name}</label>
          <div className="name-div">
            <label className="name-label">{user.first_name}</label>
            <label className="name-label">{user.last_name}</label>
          </div>
          <div className="followers-div">
            <div className="followers-tag">
              { countFollowers
                ? <label htmlFor="" className="number-label">{countFollowers}</label>
                : <label htmlFor="" className="number-label">0</label>
              }
              <label htmlFor="" className="followers-label">Followers</label>
            </div>
            <div className="followers-tag">
              { countFollowing
                ? <label htmlFor="" className="number-label">{countFollowing}</label>
                : <label htmlFor="" className="number-label">0</label>
              }
              <label htmlFor="" className="followers-label">Following</label>
            </div>

          </div>
        </div>
      </div>

      <div className="body">
        <div className="social-media-div">
          <div className="social-media-tag">
            <FiInstagram color="#18A0FB" size={20} />
              { user.instagram
                ? <label className="social-media-label">{user.instagram}</label>
                : <label className="social-media-label">-</label>
              }
          </div>
          <div className="social-media-tag">
            <FiLinkedin color="#18A0FB" size={20} />
              { user.linkedin
                ? <label className="social-media-label">{user.linkedin}</label>
                : <label className="social-media-label">-</label>
              }
          </div>
        </div>
        <div className="bio-wrapper">
          <label className="bold-label">Bio:</label>
          <div className="bio-div">
            <div className="bio-text">
              { user.bio
                ? <label className="social-media-label">{user.bio}</label>
                : <label className="social-media-label">This is the bio</label>
              }
            </div>
          </div>
        </div>

      </div>
    </Container>
  )
}
