import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <Post author="Diego Fernandes" content="Bla bla bla bla" />
      <Post author="Gabriel" content="Um novo post" />
    </div>
  )
}

