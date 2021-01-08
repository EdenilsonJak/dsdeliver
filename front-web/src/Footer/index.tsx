import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as Instagram} from './instagram.svg';
import { ReactComponent as LinkedIn } from './linkedin.svg';

function Footer(){
    return(
       <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior.
        <div className="footer-icons">
            <a href="https://youtube.com/c/DevSuperior" target="_new">
                <YouTubeIcon />
            </a>
            <a href="https://www.linkedin.com/in/edenilson-mendon%C3%A7a-santos-05575a37/" target="_new">
                <Instagram />
            </a>

            <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                <LinkedIn />
            </a>
        </div>
       
       </footer> 
    )
}

export default Footer;