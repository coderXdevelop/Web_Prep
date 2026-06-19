import { useState } from 'react';
import './App.css';
import bjpLogo from './assets/bjp.jpg';
import congressLogo from './assets/congress.jpg';
import jdsLogo from './assets/jds.png';
import aapLogo from './assets/aap.jpg';
import cpiLogo from './assets/cpi.png';
import bspLogo from './assets/bsp.jpg';

function App() {
  const [votes, setVote] = useState({
    bjp: 0,
    congress: 0,
    jds: 0,
    bsp:0,
    aap:0,
    cpi:0,
  });

  function updateVote(option) {
    setVote(prev => ({
      ...prev,
      [option]: prev[option] + 1
    }));
  }

  return (
    <div className="app-container">
      <h1 className="title">Voting App</h1>

      <table className="vote-table">
        <thead className="table-head">
          <tr className="table-row header-row">
            <th className="table-header">Sl No</th>
            <th className="table-header">Name</th>
            <th className="table-header">Party</th>
            <th className="table-header">Symbol</th>
            <th className="table-header">Vote</th>
            <th className="table-header">Count</th>
          </tr>
        </thead>

        <tbody className="table-body">
          <tr className="table-row">
            <td className="table-data">1</td>
            <td className="table-data">XYZ</td>
            <td className="table-data party-bjp">BJP</td>
            <td className="table-data symbol"><img src={bjpLogo} alt="BJP" className="logo-img" /></td>
            <td className="table-data">
              <button className="vote-btn" onClick={() => updateVote('bjp')}>
                Vote
              </button>
            </td>
            <td className="table-data count">{votes.bjp}</td>
          </tr>

          <tr className="table-row">
            <td className="table-data">2</td>
            <td className="table-data">ABC</td>
            <td className="table-data party-congress">Congress</td>
            <td className="table-data symbol"><img src={congressLogo} alt="Congress" className="logo-img" /></td>
            <td className="table-data">
              <button className="vote-btn" onClick={() => updateVote('congress')}>
                Vote
              </button>
            </td>
            <td className="table-data count">{votes.congress}</td>
          </tr>

          <tr className="table-row">
            <td className="table-data">3</td>
            <td className="table-data">LMN</td>
            <td className="table-data party-jds">JDS</td>
            <td className="table-data symbol"><img src={jdsLogo} alt="JDS" className="logo-img" /></td>
            <td className="table-data">
              <button className="vote-btn" onClick={() => updateVote('jds')}>
                Vote
              </button>
            </td>
            <td className="table-data count">{votes.jds}</td>
          </tr>
          <tr className="table-row">
            <td className="table-data">4</td>
            <td className="table-data">PQR</td>
            <td className="table-data party-aap">AAP </td>
            <td className="table-data symbol"><img src={aapLogo} alt="AAP" className="logo-img" /></td>
            <td className="table-data">
              <button className="vote-btn" onClick={() => updateVote('aap')}>
                Vote
              </button>
            </td>
            <td className="table-data count">{votes.aap}</td>
          </tr>

          <tr className="table-row">
            <td className="table-data">5</td>
            <td className="table-data">STU</td>
            <td className="table-data party-cpi">CPI</td>
            <td className="table-data symbol"><img src={cpiLogo} alt="CPI" className="logo-img" /></td>
            <td className="table-data">
              <button className="vote-btn" onClick={() => updateVote('cpi')}>
                Vote
              </button>
            </td>
            <td className="table-data count">{votes.cpi}</td>
          </tr>

          <tr className="table-row">
            <td className="table-data">6</td>
            <td className="table-data">VWX</td>
            <td className="table-data party-bsp">BSP</td>
            <td className="table-data symbol"><img src={bspLogo} alt="BSP" className="logo-img" /></td>
            <td className="table-data">
              <button className="vote-btn" onClick={() => updateVote('bsp')}>
                Vote
              </button>
            </td>
            <td className="table-data count">{votes.bsp}</td>
          </tr>

          
        </tbody>
      </table>
    </div>
  );
}

export default App;