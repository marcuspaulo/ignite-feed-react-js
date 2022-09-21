import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState(['Posto muito legal!']);

    // Utilizando o Intl, alternativa date-fns
    // const publishedDateFormatted = new Intl.DateTimeFormat(`pt-PT`, {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // }).format(publishedAt);

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    const [newCommentText, setNewCommentText] = useState(['']);

    function handleCreateNewComment() {
        event.preventDefault();

        const newCommentText = event.target.comment.value;

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        });
        
        setComments(commentsWithoutDeletedOne);
        
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

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                   if (line.type === 'paragraph') {
                    return <p key={line.content}>{line.content}</p>
                   } else if (line.type === 'link') {
                    return <p key={line.content}><a href="#">{line.content}</a> </p>
                   }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea 
                    onChange={handleNewCommentChange}
                    name="comment"
                    value={newCommentText}
                    placeholder="Deixe um comentário"/>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}