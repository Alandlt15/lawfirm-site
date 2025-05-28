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
          <h2>Personal Injury <br/> Representation You <br/> Deserve</h2>
          <p>Trust Cisneros Injury Law to fight for you rights</p>
        </div>
        <div className='mission-img'>
          <img src={MissionImg} className='mission-img' alt='Personal Injury Image'/>
        </div>
      </article>
    </>
  )
}

export default Mission