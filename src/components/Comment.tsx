import { Trash, HandsClapping } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'

const fotoPerfil = "https://github.com/chavesluucas.png";

interface CommentProps {
    content: string,
    onDeleteComment: (comment: string) => void;
}


export function Comment({ content, onDeleteComment } : CommentProps) {
    const [ likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={fotoPerfil} alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Emanuel Chaves</strong>
                            <time title='12 de Julho às 22:02h' dateTime='2022-07-12 22:02:27'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{ content }</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <HandsClapping />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    );
}