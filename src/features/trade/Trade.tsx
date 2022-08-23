import { useCallback, useState } from "react"
import styled from 'styled-components'

const TradeWrapper = styled.div`
  .form {
    .item {
      margin : 20px 0 ;
      line-height: 40px;
      display: flex;
      align-items: center;
      font-size: 16px;
      label {
        margin-right : 10px;
        width : 50px;
      }
      input,select {
        height: 24px;
        width: 92%;
        margin-left: 10px;
        border: 0;
        font-size: 24px;
      }
      select {
        border :1px;
        font-size : 18px;
      }
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }

  .action {
    button {
      width : 100%;
      height : 30px;
      background : #6bbe29;
      border : 0px;
    }
  }
`

export default function Transaction(){
  const [volume, setVolume] = useState('');
  const trade = useCallback(() => {
    
  },[volume])
  return (
    <TradeWrapper className='trade-panel'>
      <h2>Trade panel</h2>
      <div className='form'>
        <div className='item'>
          <label>type :</label>
          <select>
            <option>futrue</option>
            <option>options</option>
            <option>power</option>
          </select>
        </div>
        <div className='item'>
          <label>symbol:</label>
          <select>
            <option>BTCUSD</option>
            <option>ETHUSD</option>
          </select>
        </div>
        <div className='item'>
          <label>volume:</label>
          <input value={volume} type='number' onChange={e => setVolume(e.target.value)}/>
        </div>
      </div>
      <div className='action'>
        <button onClick={trade}>TRADE</button>
      </div>
    </TradeWrapper>
  )
}