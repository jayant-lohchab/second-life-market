import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfilePage = () => {
    const params = useParams();
    const id = params.userId;
  return (
    <h1>{id}</h1>
  )
}

export default UserProfilePage