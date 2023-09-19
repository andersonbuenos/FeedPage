import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './comment';

import styles from './Post.module.css';


export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ])

  const [newCommentText, setnewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

    const publishedAtDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true,
    })

    function handleCrateNewComment() {
      event.preventDefault()

      //const newCommentText = event.target.comment.value
      //console.log(event.target.comment.value)
  
      setComments([...comments, newCommentText]);
      setnewCommentText('');

      //declaração
      /* event.target.comment.value = '' */;
    }

    function handleNewCommentChange() {
      setnewCommentText(event.target.value)
    }

    return (
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time title={publishedDateFormatted} dateTime="2022-05-10 20:00:00">
            {publishedAtDateRelativeToNow}
          </time>
        
        </header>
        <div className={styles.content}>
          {content.map(line => {
            if (line.type === 'paragraph') {
              return <p>{line.content}</p>;
            } else if (line.type === 'link') {
              return <p><a href="#">{line.content}</a></p>
            }
        })}
        </div>
        <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            name='comment'
            placeholder="Deixe um comentário"
            value={newCommentText}
            onChange={handleNewCommentChange}
          />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>
        
        <div className={styles.commentList}>
          {comments.map(comment => {
            return <Comment content={comment}/>
          })}
        </div>
      </article>
    )
  }