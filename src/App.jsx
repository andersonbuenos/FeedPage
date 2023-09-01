import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Anderson Buenos"
              content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dolorum consectetur fugit sapiente incidunt neque nam consequatur voluptate animi corrupti. Recusandae quo rem ipsa obcaecati fuga ea blanditiis asperiores quae?"
          />
          <Post 
                author="Márcia Siqueira"
                content="Um novo post muito bacana"
          />
        </main> 
      </div> 
    </div>
  )
}

