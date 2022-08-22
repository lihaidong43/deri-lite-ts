import { useState } from "react"

export default function Positions(){
  const [positionList, setPositionList] = useState([])
  return(
    <div>
      {positionList.map(position => <div></div>)}
    </div>
  )
}