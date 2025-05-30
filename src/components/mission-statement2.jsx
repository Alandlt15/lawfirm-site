//react imports
import { useTranslation } from 'react-i18next'

//component imports


//style import
import '../styles/mission-statement2.css'

function Mission2() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <article className='mission2-card'>
        <h2 className='mission2-title'>{t("mission2.title")}</h2>
        <div className='mission2'>
          <h2 className='p-title'>{t("mission2.p1-title")}</h2>
          <p className='mission-p'>{t("mission2.p1")}</p>
          <h2 className='p-title'>{t("mission2.p2-title")}</h2>
          <p className='mission-p'>{t("mission2.p2")}</p>
          <h2 className='p-title'>{t("mission2.p3-title")}</h2>
          <p className='mission-p'>{t("mission2.p3")}</p>
        </div>
      </article>
    </>
  )
}

export default Mission2