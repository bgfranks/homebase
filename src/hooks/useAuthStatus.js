import { useEffect, useState, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkStatus, setCheckStatus] = useState(true)
  const isMonunted = useRef(true)

  useEffect(() => {
    if (isMonunted) {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true)
        }
        setCheckStatus(false)
      })
    }

    return () => {
      isMonunted.current = false
    }
  }, [])

  return { loggedIn, checkStatus, isMonunted }
}
