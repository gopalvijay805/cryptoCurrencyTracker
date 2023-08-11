import './index.css'

const CryptocurrencyItem = props => {
  const {CryptocurrencyDetails} = props
  const {
    currencyLogoUrl,
    currencyName,
    usdValue,
    euroValue,
  } = CryptocurrencyDetails

  return (
    <li className="list-container">
      <div className="title-container">
        <img className="image" src={currencyLogoUrl} alt={currencyName} />
        <p className="name">{currencyName}</p>
      </div>
      <div className="user">
        <p className="va">{usdValue}</p>
        <p className="va">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
