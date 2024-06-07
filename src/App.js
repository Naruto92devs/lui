import React, { useState, useEffect } from "react";
import './App.css';
import './index.css';
import ProgressBar from "./Components/ProgressBar";

function App() { 
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 100; // Update every 100ms
    const increments = duration / interval; // Number of increments
    let currentProgress = 0;
    const progressIncrement = 100 / increments; // Progress increment per interval

    const updateProgress = () => {
      currentProgress += progressIncrement;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(intervalId);
        setLoading(false);
      }
    };

    const intervalId = setInterval(updateProgress, interval);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);
    
  return (
    <section className="App">
      {loading ? <ProgressBar progress={progress} / > :
      <div>
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
          <div className='tokenomics'>
            <div className='slide'>
              <h1>TOKENOMICS .</h1>
              <h1>TOKENOMICS .</h1>
              <h1>TOKENOMICS .</h1>
              <h1>TOKENOMICS .</h1>
              <h1>TOKENOMICS .</h1>
              <h1>TOKENOMICS .</h1>
              <h1>TOKENOMICS .</h1>
              <h1>TOKENOMICS .</h1>
              <h1>TOKENOMICS .</h1>
              <h1>TOKENOMICS .</h1>
              <h1>TOKENOMICS .</h1>
              <h1>TOKENOMICS .</h1>
            </div>
            <div className='content'>
              <p>Total Supply:</p>
              <h2>420.690.000.000</h2>
              <img src='/images/token-img.png' alt='logo' />
            </div>
          </div>
          <div className='map'>
            <img src='/images/cloud.png' alt='logo' className='cloud'/>
            <h1>ROADMAP</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et.</p>
            <img src='/images/map.png' alt='logo'/>
            <ul className='box'>
              <li>Contract Deployment</li>
              <li>Social Media Presence</li>
              <li>Tier 2 & 3 CEX Listings</li>
              <li>CG & CMC Listings</li>
            </ul>
            <ul className='box'>
              <li>Billboard Ads</li>
              <li>Press Articles</li>
              <li>Ducky Liu paper V1 Release</li>
              <li>Partnerships</li>
              <li>Create an Ethos of Memes & Community</li>
            </ul>
            <ul className='box'>
              <li>International Community Groups</li>
              <li>Tier 1 & 2 Exchange Listings</li>
              <li>10,000 Holders</li>
              <li>Website Revisions</li>
              <li>Ducky Liu Merch</li>
            </ul>
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
      }
         
        
    </section>
  );
}

export default App;