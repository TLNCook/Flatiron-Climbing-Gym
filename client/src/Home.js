import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReviewCollection from './ReviewCollection'

function Home ({ setIsLoggedIn }) {
  const params = useParams()
  const { id } = params


  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("loggedIn"))
  }, [])

    return (
      <div id="home">
        <ReviewCollection setIsLoggedIn={setIsLoggedIn} page={'climber'} loggedInClimberId={id} />
      </div>
    )
}

export default Home;