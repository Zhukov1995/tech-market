import styles from './LContent.module.css';

interface IProps {
    children: React.ReactElement
}

const LContent = ({ children }: IProps) => {
    return (
        <div className={styles.content}>
            {children}
        </div>
    )
}

export default LContent;