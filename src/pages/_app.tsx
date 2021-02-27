import '../styles/global.css';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
function MyApp({ Component, pageProps }) {
  

  return (
      <Component {...pageProps} />
  )
}

export default MyApp
