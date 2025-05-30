//react imports
import { useTranslation } from 'react-i18next'

//component imports


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
          <p className='joel-img'>Image of Joel Here</p>
        </div>
      </article>
    </>
  )
}

export default Intro