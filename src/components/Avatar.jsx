import styles from './Avatar.module.css';

// const hasBorder = props.hasBorder !== false

export function Avatar({ hasBorder = true, src }) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} />
    )
}