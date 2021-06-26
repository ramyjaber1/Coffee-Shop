import styles from '../styles/Home.module.css'
function Showcase() {
    return (
        <>
           <section className={styles.showcase}>
               <div className={styles.overlay}>  
            <h1 className="font-bold text-white">You Day Need a  
            <span className="text-yellow-600"> Coffee To Start</span>
            </h1>
               </div>
               </section> 
        </>
    )
}

export default Showcase
