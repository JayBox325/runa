import { faFacebookF, faTwitter, faInstagram, faIntercom } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialIcons({data}) {
    return (
        <ul className="flex flex-row">
            <li className="mx-2">
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="transition-colors w-10 h-10 md:w-12 md:h-12 md:text-2xl inline-flex items-center justify-center text-white bg-facebook-500 hover:bg-facebook-700">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
            </li>
            <li className="mx-2">
                <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="transition-colors w-10 h-10 md:w-12 md:h-12 md:text-2xl inline-flex items-center justify-center text-white bg-instagram-500 hover:bg-instagram-700">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            <li className="mx-2">
                <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="transition-colors w-10 h-10 md:w-12 md:h-12 md:text-2xl inline-flex items-center justify-center text-white bg-twitter-500 hover:bg-twitter-700">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
        </ul>
    )
}