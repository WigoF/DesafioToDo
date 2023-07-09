import style from './Task.module.css'


export function Task(){
    return (
        <div className={style.tasks}>
         
            
            <div className={style.taskManeger}>
                <strong>Tarefas Criadas</strong>
                <span className={style.counter}>2</span>
            </div>
            
                    
            <div className={style.completedTask}>
                <strong>Concluidas</strong>
                <span className={style.counter}>1 de 2</span>                    
            </div>
                
                 
        </div>
    )
}