import {pricing} from './data/pricing'
import {useState} from 'react'
import {FaCheck} from 'react-icons/fa'
import styles from '../styles/Home.module.css'
function Pricing() {
const [cards,setCards] = useState(pricing)
    return (
        <>
        <section className="px-5 py-10 xl:max-w-7xl xl:mx-auto">
            <h2 className="mb-5">Pricing</h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"> 
                {pricing.map(({id,title,price,button,services}) => {
                    return(
                        <article key={id} className="p-5 bg-gray-200 shadow-lg" id="pricing">
                            <h2 className="mb-5">{price}</h2>
                            <h3 className="mb-5 text-4xl">{title}</h3>
                            <ul className="my-10"> {services.map((service,i) => {
                                return (
                                    <li key={i} className="flex items-center my-4"> 
                                    <FaCheck className="mr-5 text-green-500"/>
                                    {service}
                                    </li>
                                )
                            })}</ul>
                            <button className={styles.btn}>
                            {button}
                            </button>
                        </article> 
                    )
                })}
            </div>
            <div className="bg-yellow-600"></div>
        </section>
            
        </>
    )
}

export default Pricing
