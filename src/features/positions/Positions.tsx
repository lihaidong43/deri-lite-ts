import { useState } from "react"
import styled  from 'styled-components';

const PositionsWrapper = styled.div`

`

export default function Positions(){
  const [positionList, setPositionList] = useState([])
  return(
    <PositionsWrapper className='positions-panel'>
      <h2>Positions panel</h2>
      {positionList.map(position => <div></div>)}
    </PositionsWrapper>
  )
}