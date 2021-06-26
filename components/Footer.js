import {FaFacebook,FaTwitter,FaInstagram,FaBehance,FaPinterest,FaDribbble} from 'react-icons/fa'
function Footer() {
    return (
        <>
            <footer className="px-5 py-10" id="footer">
                <h2 className="mb-5 text-center">Social Media Contacts</h2>
                <ul className="flex flex-wrap items-center justify-center"> 
                    <li className="mx-5"><FaFacebook className="text-2xl" /></li>
                    <li className="mx-5"> <FaTwitter className="text-2xl"  /></li>
                    <li className="mx-5"><FaInstagram className="text-2xl"  /></li>
                    <li className="mx-5"><FaBehance className="text-2xl"  /></li>
                    <li className="mx-5"><FaDribbble className="text-2xl"  /></li>
                    <li className="mx-5"><FaPinterest className="text-2xl"  /></li>

                </ul>
            </footer>
        </>
    )
}

export default Footer
