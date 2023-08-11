import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {cryptocurrenciesData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrency()
  }

  getCryptoCurrency = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    this.setState({
      cryptocurrenciesData: data.map(eachItem => ({
        id: eachItem.id,
        currencyLogoUrl: eachItem.currency_logo,
        currencyName: eachItem.currency_name,
        usdValue: eachItem.usd_value,
        euroValue: eachItem.euro_value,
      })),
      isLoading: false,
    })
  }

  renderCryptocurrenciesList = () => {
    const {cryptocurrenciesData} = this.state

    return <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container" data-testid="loader">
        {isLoading ? (
          <Loader type="Rings" color="#ffffff" height={100} width={100} />
        ) : (
          this.renderCryptocurrenciesList()
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
