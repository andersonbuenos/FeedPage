import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
             <img src="https://media.licdn.com/dms/image/C4D03AQErUDqpwQZVOA/profile-displayphoto-shrink_800_800/0/1643648874387?e=1698883200&v=beta&t=zSjdtS6NjnaLVAbHISAHd6-ZfUFxY-xYO-yy-2sIkMg"
             />

             <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Anderson Buenos</strong>
                            <time title='11 de Maio às 08:14' dateTime='2022-05-11 08:14:30'>Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar ">
                            <Trash size={24} />
                        </button>                    
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
             </div>
        </div>
    )
}