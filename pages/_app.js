import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import {AuthProvider} from '../contexts/auth'
import './styles.css';
import "../styles/vet.css"
function MyApp({ Component, pageProps }) {
  return <AuthProvider>
  <Component {...pageProps} />
</AuthProvider>
}

export default MyApp
