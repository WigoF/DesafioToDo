import {Header} from './Component/Header';
import { NewTask } from './Component/NewTask';
import { Task } from './Component/Task';

import styles from './App.module.css'
import './global.css'



function App() {
  
  return (
    <div>
      <Header />
        <div className={styles.boxtask}>
          <NewTask/>
        </div>

        <main>
          <Task />

              
        </main>
    </div>
  )
}

export default App
