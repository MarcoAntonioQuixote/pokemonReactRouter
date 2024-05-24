import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    },3000)
  },[])

  return (
    <div>That Page Does Not Exist 🥲</div>
  )
}

export default NotFoundPage