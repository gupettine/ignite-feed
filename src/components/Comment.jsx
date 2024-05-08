import avatar from '../assets/avatar.png';
import { Trash, ThumbsUp } from 'phosphor-react';

import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src={avatar} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gustavo Pettine</strong>
                            <time title="May 7th at 20:00h" dateTime="2024-05-07 20:00:00">Commented 1 hour ago</time>
                        </div>

                        <button title="Delete comment">
                            <Trash size={22} />
                        </button>
                    </header>

                    <p>Congratulations!!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={18} />
                        Like <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
