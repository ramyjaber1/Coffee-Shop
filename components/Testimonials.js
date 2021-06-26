import {useState} from 'react'
import {testimonials} from './data/testimonials'

const Testimonials = () => {
    const [cards,setCars] = useState(testimonials)
    
    return (
        <>
        <section className="px-5 py-10">
            <h2 className="mb-5">Testimonials</h2>
            <div className="grid grid-cols-1 gap-10 bg-gray-100 shadow-lg md:grid-cols-2 lg:grid-cols-3 xl:mx-auto">
                {cards.map(({id,image,name,title,desc}) => {
                    return <article key={id} className="p-5 bg-gray-200 shadow-lg"  >
                            <div className="flex items-center mb-5"> 
                                <img src={image} alt={name} />
                            </div>
                            <div className="ml-5"> 
                                <h4>{name}</h4>
                                <p>{title}</p>
                            </div>
                            <img src="/quotes.png" alt="" />
                            <p className="mt-5">{desc}</p>
                    </article>
                })}
            </div>
        </section>
            
        </>
    )
}

export default Testimonials
