import React from 'react'
import { useSelector } from 'react-redux';

const ListingsPage = () => {
  const usersList = useSelector(state=>state.accountReducers.usersList);
  
  return (
    <div>{usersList}</div>
  )
}

export default ListingsPage;