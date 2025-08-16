import styles from './ui/InfoPlate.module.css';

function InfoRow({img, title, text}) {
    return (
        <div className={styles.row}>
            <img src={img} alt={404} className={styles.rowImage} />
            <div>
                <h4>{title}</h4>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    );
}




export default function InfoPlate({ title, description }) {
  
    return (
        <div className={styles.container}>
           
        <InfoRow
            img="/icons/signup/1.png"
            title="Більше ніж 800 категорії послуг для роботи"
            text="Ви зможете працювати як за своєю спеціальністю, так і в нових напрямках"
        />
        <InfoRow
            img="/icons/signup/2.png"
            title="Працюйте в зручну для вас годину"
            text="Складіть свой особистий графік роботи та заробляйте тоді, коли вам зручно"
        />
        <InfoRow
            img="/icons/signup/3.png"
            title="Заробляйте гідно"
            text="Сервіс може бути джерелом як додаткового, так і основного заробітку"
        />


        </div>
    
    
    
    
    )
    }