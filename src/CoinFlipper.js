import React, { Component } from 'react'
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props){
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
        side: "tura",
        donuyor: false,
        atis: 0,
        yazi: 0,
        tura: 0
    }
  }
  handleClick = () => {
    

    let sayi = Math.floor(Math.random() * 2);

    this.setState({
      side: sayi === 1 ? "tura" : "yazi",
      atis: this.state.atis + 1,
    });

    this.setState({
      tura: this.state.side === "tura" ? this.state.tura + 1 : this.state.tura,
      yazi: this.state.side === "yazi" ? this.state.yazi + 1 : this.state.yazi
    });


    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "donuyor" durumunu "true" yapıyoruz.
    this.setState({donuyor: true});
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "donuyor" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({donuyor: false}), 1000);
  };

  render(){
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        <button onClick={this.handleClick} >At!</button>
        <p>
            Toplam
            <strong> {this.state.atis} </strong>
            atıştan
            <strong> {this.state.tura} </strong>
            tura,
            <strong> {this.state.yazi} </strong>
            yazı geldi.</p>
      </div>
    )
  }
}

export default CoinFlipper;