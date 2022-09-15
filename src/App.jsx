import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header></Header>

      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </main>
      </div>
    </div>
  )
}
