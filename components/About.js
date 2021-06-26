import styles from '../styles/Home.module.css'
function About() {
    return (
        <>
        <section className="flex flex-col-reverse px-5 py-10 md:grid md:grid-cols-2 md:gap-5 md:items-center xl:max-w-7xl xl:mx-auto xl:gap:20" id ="about-us"> 
            <div>
                <h3 className="my-5">Hello There our store called newtown based on a movie and we will make you a natural coffee</h3>
                <p className="mb-10">“We made every cup with love and our coffee is come straight from brazil and ghana 
                    thats why it have a special taste you cannot find it anywhere else ”
                </p>
                <button className={styles.btn}>View Princing Website</button>
            </div>
            <div>
                <h2 className="mb-5">About Us</h2>
                <img className="w-full" src="/about-me.png" alt="blog" />
            </div>
            </section>
            
        </>
    )
}

export default About
