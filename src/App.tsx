import styles from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList/indext'

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageList /> 
      <LoginBox />
    </main>
  )
}

