import styles from './Card.module.scss';


const Card = () =>{
    return(
        <div className={styles['card']}>
            <div className={styles['card-image']}>
            </div>
            <div className={styles['card-content']}>
                <div className={styles['card-title']}>
                    <p>Get <span className={styles['purple-text']}>insights</span> that help your business grow</p>
                </div>
                <div className={styles['card-description']}>
                    <p>Discover the benefits of data analytic and make better decissions
                       regarding revenue, customer experience, and overall efficiency
                    </p>
                </div>
                <div className={styles['card-data__group']}>
                    <div className={styles['card-data']}>
                        <p>10K+</p>
                        <p>COMPANIES</p>
                    </div>
                    <div className={styles['card-data']}>
                        <p>314</p>
                        <p>TEMPALTES</p>
                    </div>
                    <div className={styles['card-data']}>
                        <p>12M+</p>
                        <p>QUERIES</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;