import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

// icon
import GoogleIcon from '../assets/svg/googleIcon.svg'

export default function Oauth() {
  const navigate = useNavigate()
  const location = useLocation()

  const onGoogleClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const res = await signInWithPopup(auth, provider)
      const user = res.user

      // check for user in the the db
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      // if users doesn't exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }

      navigate('/')
    } catch (error) {
      toast.error('Could not authorize with Google')
    }
  }

  return (
    <div className='socialLogin'>
      <p>Sign {location.pathname === '/sign-up' ? 'Up' : 'In'} With </p>
      <button className='socialIconDiv' onClick={onGoogleClick}>
        <img
          className='socialIconImg'
          src={GoogleIcon}
          alt='Sign in with Google'
        />
      </button>
    </div>
  )
}
