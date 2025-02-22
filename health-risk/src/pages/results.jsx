import React, { useEffect, useState } from 'react'

const [healthStatus, setHealthStatus] = useState([{}])

useEffect(() => {
  fetch("/api").then(
    response => response.json()
  ).then(
    data => {
      setHealthStatus(data)
    }
  )
}, [])

