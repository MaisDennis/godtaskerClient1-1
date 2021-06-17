import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
// -----------------------------------------------------------------------------
import { Container } from './styles'
import DashboardPanel from '../DashboardPanel'
import DashboardProfile from '../DashboardProfile'
import api from '~/services/api';
// -----------------------------------------------------------------------------

export default function DashboardContainer() {

  // ---------------------------------------------------------------------------
  return (
    <Container>
      <DashboardPanel/>
      <DashboardProfile
        // user={user}
        // worker={worker}
        // countFollowing={countFollowing}
        // countFollowers={countFollowers}
      />
    </Container>

  )
}
