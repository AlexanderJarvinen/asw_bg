import './Footer.css';
import { SocialIcon } from 'react-social-icons';
import { FormattedMessage } from 'react-intl';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="data-wrapper">
                <h5>©{new Date().getFullYear() } Arctic Sonic Wave Beograd. <FormattedMessage id='rights'/>.</h5>
                <h5><FormattedMessage id='address'/></h5>
                <h5><FormattedMessage id='tel'/> <a href="tel:+38161585660">061585660</a></h5>
                <h5><a href="mailto:info@arcticsonicwave.rs">info@arcticsonicwave.rs</a></h5>
            </div>
            <div className="icon-block">
                <div className="icon-wrapper">
                    <SocialIcon url="https://www.instagram.com/arctic_sonic_wave_beograd/" />
                    <SocialIcon url="https://www.facebook.com/arcticdreamsband" />
                    <SocialIcon url="https://t.me/AlexanderJar" />
                    <SocialIcon url="whatsapp://send?phone=79816990947" />
                </div>
            </div>
        </div>
    );
}
