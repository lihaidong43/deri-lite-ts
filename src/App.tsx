import './app.scss';
import Trade from './features/trade/Trade';
import Positions from './features/positions/Positions';
import Account from './features/account/Account';
import Contract from './features/contract/Contract';
import History from './features/history/History';
import Wallet from './features/wallet/Wallet';

function App() {
  return (
    <div className="app">
      <Wallet/>      
      <Trade/>
      <Positions/>
      <Account/>
      <Contract/>
      <History/>
    </div>
  );
}

export default App;
