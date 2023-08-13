import './App.css'
import Footer from './components/footer'
import Icons from './components/icons'
import Profile from './components/profile'
import ProfileLinks from './components/profile-links'
import { ItemLinks } from './itemlinks'


function App() {

  return (
    <>
      <div>
        <div className='circle-contaner'>
          <img src="./assets/share.svg" alt="share" className='share'/>
          <img src="./assets/dots.svg" alt="dots" className='dots' />
        
        </div>
        <Profile />

        <section>
          {ItemLinks.map((item, id) => {
            return <ProfileLinks  key={id} link={item}/>
          })}
        </section>
        
      <Icons />

      <div className="bottom-border">
</div>


      <Footer />
      </div>
      
    </>
  )
}

export default App
