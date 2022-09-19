import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <img
                    className={styles.avatar}
                    src="https://avatars.githubusercontent.com/u/2917521?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Marcus Paulo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="14 de Setembro de 2022" dateTime="2002-09-14">Publicado a </time>
            </header>

            <div className={styles.content}>
                <p>lorem ipsum dolor sit amet, consectetur</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p>Voluptatibus, explicabo! Deserunt voluptates velit nisi tenetur consequatur architecto. Saepe magni voluptates quia commodi enim, fugiat facere. Veritatis quos veniam soluta obcaecati!</p>
                <p> Teste espaço: lorem ipsum dolor sit amet, consectetur</p>
                <a href="#">http://localhost</a>{'  '}<a href="#">http://localhost:3000</a>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea placeholder="Deixe um comentário"/>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article>
    )
}