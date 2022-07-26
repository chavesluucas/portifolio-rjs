import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: string;
    content: string;
    src?: string;
}

interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post({ author, publishedAt, content } : PostProps) {
    const [ comments, setComements] = useState([`Gostaria de avisar que não temos um backend para esse site 🙁, então os comentários publicados não serão salvos e ao recarregar a aplicação reinicia.`]);
    const [ newCommentText, setNewCommentText ] = useState('');

    //formatar a data
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale:ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()


        setComements([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete:string) {
        //imutabilidade -> as variaveis não sofrem mutação(nunca alteramos uma variavel na memoria), nós criamos um novo valor (um novo espaço na memória)
        console.log(`Deletando o comentário "${commentToDelete}"`)

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComements(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
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
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if(line.type === 'link'){
                        return <p key={line.content}><a href={line.src}target="_blank">{line.content}</a></p>
                    }
                })}
            </div>


            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                name='comment'
                placeholder='Deixe um comentário'
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required //tem q deigitar um texto
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return(
                        <Comment key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                    )
                })}
            </div>
        </article>
    )
}