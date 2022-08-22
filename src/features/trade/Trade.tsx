import { useCallback, useState } from "react"
import styled from 'styled-components'

const TradeWrapper = styled.div`
  text-align : left;
  padding : 4px 30px 30px 30px;
  width : 400px;
  background : #de8413;
  h2 {
    padding : 0px;
  }
  .form {
    margin : 20px 0 ;
    label {
      margin-right : 10px;
    }
    input {
      height : 20px;
      width : 79%;
      margin-left : 10px;
      border: 0;
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
    <TradeWrapper>
      <h2>Trade panel</h2>
      <div className='form'>
        <label>volume:</label>
        <input value={volume} type='number' onChange={e => setVolume(e.target.value)}/>
      </div>
      <div className='action'>
        <button onClick={trade}>TRADE</button>
      </div>
    </TradeWrapper>
  )
}