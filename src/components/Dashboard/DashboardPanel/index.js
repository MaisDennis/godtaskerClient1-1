import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// -----------------------------------------------------------------------------
import { Container } from './styles';
import api from '~/services/api';
// -----------------------------------------------------------------------------

export default function DashboardPanel() {
  const user_id = useSelector(state => state.user.profile.id);
  const user_phonenumber = useSelector(state => state.user.profile.phonenumber);

  const user_photo = useSelector(state => state.user.profile.avatar) || null;
  const user_instagram = useSelector(state => state.user.profile.instagram);
  const worker_id = useSelector(state => state.worker.profile.id);

  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userUserName, setUserUserName] = useState();
  const [userPhoto, setUserPhoto] = useState();
  const [userInstagram, setUserInstagram] = useState();
  const [userLinkedIn, setUserLinkedIn] = useState();
  const [userBio, setUserBio] = useState();

  const [userCountSent, setUserCountSent] = useState();
  const [userCountInitiated, setUserCountInitiated] = useState();
  const [userCountFinished, setUserCountFinished] = useState();
  const [userCountCanceled, setUserCountCanceled] = useState();
  const [userCountOverDue, setUserCountOverDue] = useState();
  const [userCountTodayDue, setUserCountTodayDue] = useState();
  const [userCountTomorrowDue, setUserCountTomorrowDue] = useState();
  const [userCountThisWeekDue, setUserCountThisWeekDue] = useState();
  const [workerCountReceived, setWorkerCountReceived] = useState();
  const [workerCountInitiated, setWorkerCountInitiated] = useState();
  const [workerCountFinished, setWorkerCountFinished] = useState();
  const [workerCountCanceled, setWorkerCountCanceled] = useState();
  const [workerCountOverDue, setWorkerCountOverDue] = useState();
  const [workerCountTodayDue, setWorkerCountTodayDue] = useState();
  const [workerCountTomorrowDue, setWorkerCountTomorrowDue] = useState();
  const [workerCountThisWeekDue, setWorkerCountThisWeekDue] = useState();

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const user = await api.get(`users/${user_id}`)

    const userResponse = await api.get('/tasks/user/count', {
      params: {
        userID: user_id,
      }
    })

    const workerResponse = await api.get('/tasks/count', {
      params: {
        workerID: worker_id,
      }
    })

    // console.log(user.data)
    setUserFirstName(user.data.first_name)
    setUserLastName(user.data.last_name)
    setUserUserName(user.data.user_name)
    setUserPhoto(user.data.avatar)
    setUserInstagram(user.data.instagram)
    setUserLinkedIn(user.data.linkedin)
    setUserBio(user.data.bio)

    setUserCountSent(userResponse.data.countSent)
    setUserCountInitiated(userResponse.data.countInitiated)
    setUserCountFinished(userResponse.data.countFinished)
    setUserCountCanceled(userResponse.data.countCanceled)
    setUserCountOverDue(userResponse.data.countOverDue)
    setUserCountTodayDue(userResponse.data.countTodayDue)
    setUserCountTomorrowDue(userResponse.data.countTomorrowDue)
    setUserCountThisWeekDue(userResponse.data.countThisWeekDue)
    setWorkerCountReceived(workerResponse.data.countReceived)
    setWorkerCountInitiated(workerResponse.data.countInitiated)
    setWorkerCountFinished(workerResponse.data.countFinished)
    setWorkerCountCanceled(workerResponse.data.countCanceled)
    setWorkerCountOverDue(workerResponse.data.countOverDue)
    setWorkerCountTodayDue(workerResponse.data.countTodayDue)
    setWorkerCountTomorrowDue(workerResponse.data.countTomorrowDue)
    setWorkerCountThisWeekDue(workerResponse.data.countThisWeekDue)
  }

  // ---------------------------------------------------------------------------
  return (
    <Container>
      <div className="content-view">
        <div className="label-view">
          <label className="label">Boss Status:</label>
        </div>

        <div className="status-view">
          <div className="block-small-boss">
            <label className="label-bold-boss">
              { userCountSent !== 0
                ? userCountSent
                : '-'
              }
            </label>
            <label className="label-normal-boss">Sent</label>
          </div>

          <div className="block-small-boss">
            <label className="label-bold-boss">
              { userCountInitiated !== 0
                ? userCountInitiated
                : '-'
              }
            </label>
            <label className="label-normal-boss">Open</label>
          </div>

          <div className="block-small-boss">
            <label className="label-bold-boss">
              { userCountFinished !== 0
                ? userCountFinished
                : '-'
              }
            </label>
            <label className="label-normal-boss">Finished</label>
          </div>

          <div className="block-small-boss">
            <label className="label-bold-boss">
              { userCountCanceled !== 0
                ? userCountCanceled
                : '-'
              }
            </label>
            <label className="label-normal-boss">Canceled</label>
          </div>
        </div>

        <div className="status-view">
          <div className="block-large-boss">
            <div className="block-segment">
              <label className="label-bold-red">
                { userCountOverDue !== 0
                  ? userCountOverDue
                  : '-'
                }
              </label>
              <label className="label-bold-boss2">
                { userCountTodayDue !== 0
                  ? userCountTodayDue
                  : '-'
                }
              </label>
              <label className="label-bold-boss2">
                { userCountTomorrowDue !== 0
                  ? userCountTomorrowDue
                  : '-'
                }
              </label>
              <label className="label-bold-boss2">
                { userCountThisWeekDue !== 0
                  ? userCountThisWeekDue
                  : '-'
                }
              </label>
              <label className="label-bold-boss2">
                { userCountInitiated !== 0
                  ? userCountInitiated
                  : '-'
                }
              </label>
            </div>
            <div className="block-segment">
              <div className="status-circle-red"></div><hr className="hrLine-boss"/>
              <div className="status-circle-boss"></div><hr className="hrLine-boss"/>
              <div className="status-circle-boss"></div><hr className="hrLine-boss"/>
              <div className="status-circle-boss"></div><hr className="hrLine-boss"/>
              <div className="status-circle-boss"></div>
            </div>
            <div className="block-segment">
              <label className="label-small-red">overdue</label>
              <label className="label-small-boss2">due today</label>
              <label className="label-small-boss">tomorrow</label>
              <label className="label-small-boss">this week</label>
              <label className="label-small-boss2">Total</label>
            </div>
          </div>
        </div>
      </div>

      <div className="content-view">
        <div className="label-view">
          <label className="label">Jobs Status:</label>
        </div>

        <div className="status-view">
          <div className="block-small-worker">
            <label className="label-bold-worker">
              { workerCountReceived !== 0
                ? workerCountReceived
                : '-'
              }
            </label>
            <label className="label-normal-worker">Received</label>
          </div>

          <div className="block-small-worker">
            <label className="label-bold-worker">
              { workerCountInitiated !== 0
                ? workerCountInitiated
                : '-'
              }
            </label>
            <label className="label-normal-worker">Open</label>
          </div>

          <div className="block-small-worker">
            <label className="label-bold-worker">
              { workerCountFinished !== 0
                ? workerCountFinished
                : '-'
              }
            </label>
            <label className="label-normal-worker">Finished</label>
          </div>

          <div className="block-small-worker">
            <label className="label-bold-worker">
              { workerCountCanceled !== 0
                ? workerCountCanceled
                : '-'
              }
            </label>
            <label className="label-normal-worker">Canceled</label>
          </div>
        </div>

        <div className="status-view">
          <div className="block-large-worker">
            <div className="block-segment">
              <label className="label-bold-red">
                { workerCountOverDue !== 0
                  ? workerCountOverDue
                  : '-'
                }
              </label>
              <label className="label-bold-worker2">
                { workerCountTodayDue !== 0
                  ? workerCountTodayDue
                  : '-'
                }
              </label>
              <label className="label-bold-worker2">
                { workerCountTomorrowDue !== 0
                  ? workerCountTomorrowDue
                  : '-'
                }
              </label>
              <label className="label-bold-worker2">
                { workerCountThisWeekDue !== 0
                  ? workerCountThisWeekDue
                  : '-'
                }
              </label>
              <label className="label-bold-worker2">
                { workerCountInitiated !== 0
                  ? workerCountInitiated
                  : '-'
                }
              </label>
            </div>
            <div className="block-segment">
              <div className="status-circle-red"></div><hr className="hrLine-worker"/>
              <div className="status-circle-worker"></div><hr className="hrLine-worker"/>
              <div className="status-circle-worker"></div><hr className="hrLine-worker"/>
              <div className="status-circle-worker"></div><hr className="hrLine-worker"/>
              <div className="status-circle-worker"></div>
            </div>
            <div className="block-segment">
              <label className="label-small-red">overdue</label>
              <label className="label-small-worker2">due today</label>
              <label className="label-small-worker">tomorrow</label>
              <label className="label-small-worker">this week</label>
              <label className="label-small-worker2">Total</label>
            </div>
          </div>
        </div>
      </div>
    </Container>

  )
}
