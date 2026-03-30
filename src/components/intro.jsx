//react imports
import { useTranslation } from 'react-i18next'

//component imports
import JoelCisneros from "../assets/joelcisneros.jpeg"

//style import
import '../styles/intro.css'

function Intro() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <article className='intro-card'>
        <h2 className='intro-title'>{t("intro.title")}</h2>
        <div className='intro'>
          <p className='bio'>{t("intro.bio")}</p>
          <img src={JoelCisneros} className='mission-img' alt='Personal Injury Image'/>
        </div>
      </article>
    </>
  )
}

export default Intro