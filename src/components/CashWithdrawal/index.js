// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <p className="profile-letter">s</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your balance</p>
            <p className="balance-amount">
              {balance} <br /> <span className="rupees">in rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="withdraw-description balance">CHOOSE SUM (IN RUPEES)</p>
          <ul className="withdraw-amount-list">
            {denominationsList.map(eachAmount => (
              <DenominationItem
                key={eachAmount.id}
                denominationDetails={eachAmount}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
