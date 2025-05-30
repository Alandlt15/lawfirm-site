//react imports


//component imports
import MissionImg from '../assets/mission-img.jpg'

//style import
import '../styles/mission-statement.css'

function Mission() {

  return (
    <>
      <article className='mission-cards'>
        <div className='mission'>
          <h2 className='mission-title'>You Focus on Healing<br/>We'll Handle the Rest</h2>
          <p className='mission-slogan'>Count on <b>Cisneros Injury Law</b> to stand by your side and fight for the compensation you <b>deserve</b><br/><br/>Serving the Austin Area</p>
        </div>
        <div className='mission-img'>
          <img src={MissionImg} className='mission-img' alt='Personal Injury Image'/>
        </div>
      </article>
    </>
  )
}

export default Mission