import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from './Avatar'

export function Comment(props) {
    return (
        <div className={styles.comment}>
             <Avatar hasBorder={false} src="https://github.com/diego3g.png"
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
                    <p>{props.content}</p>
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