import React, { useState, useEffect, useCallback } from 'react'
import { Web3Provider } from '@ethersproject/providers';
import {formatEther} from '@ethersproject/units'
import { useWeb3React } from '@web3-react/core'
import { injected } from './connector';
import  styled  from 'styled-components';
import { useInactiveListener } from '../../hooks/useInactiveListener';
const WalletWrapper = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  color: #fff;
  font-size : 24px;
  button {
    background: #6bbe29;
    width: 100%;
    height: 40px;
    border: 0px;
  }

`
export default function Wallet(props : any){
  const { connector, library, deactivate, activate, active,account,chainId } = useWeb3React<Web3Provider>();
  const [activatingConnector, setActivatingConnector] = React.useState<any>()
  const [balance, setBalance] = React.useState<string | number>('')
  const provider = library

  const connect = useCallback(() => {
    if(!active){
      activate(injected)
      setActivatingConnector(injected)
    }    
  },[activate,active])

  const disconnect = useCallback(() => {
    if(activatingConnector){
      deactivate()
    }
  },[active,deactivate])
 

  // React.useEffect(() => {
  //   if (activatingConnector && activatingConnector === connector) {
  //     setActivatingConnector(undefined)
  //   }
  // }, [activatingConnector, connector])

  // useInactiveListener(!!activatingConnector)
  React.useEffect(() => {
    activate(injected,(error) => {
      console.log(error)
    })
  }, [injected,activate])

  React.useEffect(() : any => {
    if(active && account){
      provider?.getBalance(account).then(result => {
        setBalance(formatEther(result))
      })
    }
  },[active,account])
  return (
    <WalletWrapper className='wallet-panel'>
      {
        active
          ? <div>ChainId : {chainId} ,Account : {account},Balance : {balance}</div>
          : <button onClick={connect}>Connect Wallet</button>
      }
    </WalletWrapper>
  )
}