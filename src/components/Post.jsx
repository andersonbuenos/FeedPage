import styles from './Post.module.css';
import { Comment } from './comment';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://media.licdn.com/dms/image/C4D03AQErUDqpwQZVOA/profile-displayphoto-shrink_800_800/0/1643648874387?e=1698883200&v=beta&t=zSjdtS6NjnaLVAbHISAHd6-ZfUFxY-xYO-yy-2sIkMg" />
                    <div className={styles.authorInfo}>
                        <strong>Anderson Buenos</strong>
                        <span>Web Developer</span>
                    </div>    
                </div>

                <time title='11 de Maio às 08:14' dateTime='2022-05-11 08:14:30'>Publicado há 1 h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}