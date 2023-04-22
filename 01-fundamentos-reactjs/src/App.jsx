import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Diego Fernandes" content="Bla bla bla bla" />
          <Post author="Gabriel" content="Um novo post" />
        </main>
      </div>
    </div>
  )
}

