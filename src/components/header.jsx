//react imports
import { useTranslation } from 'react-i18next'

//component import
//import Logo from '../assets/logo.svg'

//style import
import '../styles/header.css'

function Header() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'sp' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <header className='header'>
        <p></p>
        <p>logo</p>
        <button className='lang-button' onClick={toggleLanguage}>
        {i18n.language === 'en' ? 'Esp' : 'Eng'}
        </button>
        {/* <img src={Logo} alt='logo' className='logo'/> */}
      </header>
    </>
  )
}

export default Header