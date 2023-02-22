import {Header} from './Component/Header';
import { NewTask } from './Component/NewTask';


import styles from './App.module.css'
import './global.css'


function App() {
  
  return (
    <div>
      <Header />
        <div className={styles.boxtask}>
          <NewTask/>
        
        
        
        
        </div>
    </div>
  )
}

export default App
