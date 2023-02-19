import logo from "../assets/logo.svg";
import { ethers } from "ethers";

//passing the useState variables as props
const Navigation = ({ account, setAccount }) => {
  //fn to get accounts and connect
  const connectionHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account);
  }

  return (
    <nav>
      <ul className="nav__links">
        <li>
          <a href="#">Buy</a>
        </li>
        <li>
          <a href="#">Sell</a>
        </li>
        <li>
          <a href="#">Lend</a>
        </li>
      </ul>

      <div className="nav__brand">
        <img src="https://techmoran.com/wp-content/uploads/2022/09/Houselogo.png" alt="Logo" />
        <h1>Web3 Property</h1>
      </div>

      {/* we wamt a button with a condition that is account is connected then show it
        if its not then show connect button. */}
      {account ? (
        <button type="button" className="nav__connect">
          {account.slice(0, 6) + "..." + account.slice(38, 42)}
        </button>
      ) : (
        <button
          type="button"
          className="nav__connect"
          onClick={connectionHandler}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  );
};

export default Navigation;
