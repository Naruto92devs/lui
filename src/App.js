import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <img src='/images/nav-bg.png' alt='logo' className='bg' />
        <a href='/'>
          About
        </a>
        <a href='/'>
          Tokenomics
        </a>
        <a href='/'>
          Roadmap
        </a>
        <div className='socials'>
          <a href='/'>
            <img src='/images/telegram.png' alt='logo' />
          </a>
          <a href='/'>
            <img src='/images/x.png' alt='logo' />
          </a>
        </div>
      </nav>
      <div className='hero_section'>
        <div className='left'>
          <h1>DUCKY LIU</h1>
          <img src='/images/welcome.png' alt='logo' className='welcome' />
          <p>The ultimate degenerate on the Ethereum blockchain! Known for wild trades and even wilder stories.</p>
          <div className='buttons'>
            <a href='/'>
              <img src='/images/get.png' alt='btn' />
            </a>
            <a href='/'>
              <img src='/images/dextools.png' alt='btn' />
            </a>
          </div>
        </div>
        <img src='/images/hero-img.png' alt='logo' className='hero' />
      </div>
      <div className='about'>
        <h1> 
          <span style={{color: '#E70103'}}>ABOUT</span>  THE <br/> 
          <span style={{color: '#FEEF86'}}>PROJECTS</span>
        </h1>
        <img src='/images/cloud.png' alt='logo' className='cloud'/>
        <div className='content'>
          <img src='/images/about-bg.png' alt='logo' className='bg'/>
          <h2>ABOUT DUCKY LIU</h2>
          <p>Meet Ducky Liu, the ultimate degenerate on the Ethereum blockchain! Known for wild trades and even wilder stories, Ducky has finally teamed up with fellow crypto enthusiasts. Together, we're navigating the crazy world of Ethereum, one outrageous trade at a time. Buckle up and join the fun!</p>
        </div>
      </div>
      <div className='info'>
        <div className='left'>
          <img src='/images/info.png' alt='logo'/>
          <img src='/images/dot.png' alt='logo' className='dot'/>
          <p>Ducky Liu's meme history began in the vibrant online communities of China, where he emerged as a humorous character symbolizing a risk-loving trader. His outrageous trades and hilarious mishaps quickly turned him into a meme sensation. With witty catchphrases and iconic images, Ducky Liu became a beloved figure, embodying the fearless spirit of the crypto enthusiast.</p>
        </div>
        <div className='right'>
          <img src='/images/info-immg.png' alt='logo'/>  
        </div>
      </div>
      <div className='join'>
        <img src='/images/about-bg.png' alt='logo' className='bg' />
        <h2>GET YOUR $LIU</h2>
        <p>Ducky Liu is a decentralized meme coin created with the goal of reaching critical mass. We believe that meme coins epitomize the power of community and togetherness,</p>
        <a href='/'>
          <img src='/images/get1.png' alt='logo' />
        </a>
      </div>
      <footer>
        <a href='/'>
          <img src='/images/f-logo.png' alt='logo' className='logo'/>
        </a>
        <p>Copyright © 2024 LIU. All Rights Reserved</p>
        <div className='socials'>
          <a href='/'>
            <img src='/images/telegram.png' alt='logo' />
          </a>
          <a href='/'>
            <img src='/images/x.png' alt='logo' />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
