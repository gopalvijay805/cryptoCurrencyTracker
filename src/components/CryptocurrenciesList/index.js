import {Component} from 'react'
import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="list-header">
      <p className="heading">Coin Type</p>
      <div className="values-container">
        <p className="con">USD</p>
        <p className="con">EURD</p>
      </div>
    </div>
  )

  renderCryptocurrenciesView() {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="container">
        {this.renderCryptocurrenciesHeader()}

        <ul className="list">
          {cryptocurrenciesData.map(eachitem => (
            <CryptocurrencyItem
              key={eachitem.id}
              CryptocurrencyDetails={eachitem}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cry-constainer">
        <h1 className="heading1">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cry-img"
        />
        {this.renderCryptocurrenciesView()}
      </div>
    )
  }
}
export default CryptocurrenciesList
