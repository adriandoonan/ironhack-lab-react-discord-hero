// src/App.jsx
import './App.css';
import discordLogo from './assets/discord-logo-white.png'
import hamburger from './assets/menu-icon.png'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <img src={discordLogo} className="main-logo" />
          </li>
        </ul>
        <ul>
          <li>
          <img src={hamburger} className="hamburger" />
          </li>
        </ul>
      </nav>
      <main>
        <h1>Imagine&nbsp;a place...</h1>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often. </p>
        <article id="buttons">
          <div>
          <button>Download for Mac</button> 

          </div>
          <div>
          <button className='invert'>Open Discord in your browser</button>
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;