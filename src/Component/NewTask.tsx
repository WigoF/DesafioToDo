import Style from './NewTask.module.css'
import {PlusCircle} from 'phosphor-react'

export function NewTask(){
    return (

        
            <form className={Style.newtask}>
                <textarea

                    placeholder='Adicione uma nova tarefa'
                />

                <button className={Style.button} type='submit'>
                    Criar <PlusCircle size={32} />
                </button>

        </form>
        
        
    )
}