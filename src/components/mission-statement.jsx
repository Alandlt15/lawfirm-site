//react imports


//component imports
import { useTransition } from 'react'
import MissionImg from '../assets/mission-img.jpg'
import { useTranslation } from 'react-i18next'

//style import
import '../styles/mission-statement.css'

function Mission() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <article className='mission-cards'>
        <div className='mission'>
          <h2 className='mission-title'>{t("mission.title1")}<br/>{t("mission.title2")}</h2>
          <p className='mission-slogan'>{t("mission.p1a")}<b>{t("mission.p1b")}</b>{t("mission.p1c")}<b>{t("mission.p1d")}</b><br/><br/>{t("mission.p2")}</p>
        </div>
        <div className='mission-img'>
          <img src={MissionImg} className='mission-img' alt='Personal Injury Image'/>
        </div>
      </article>
    </>
  )
}

export default Mission