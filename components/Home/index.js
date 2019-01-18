import React, { Component } from 'react'
import styled from 'styled-components'
import Background from '../Core/Background'
import Model from '../Core/Model'

const Logo = styled.img`
  position: relative;
  width: 100%;
  margin-top: 0vh;
  @media (min-width:300px) {
    width: 80%;
  }
  @media (min-width:801px) {
    width: 50%;
  }
  @media (min-width:1024px) {
    width: 55%;
  }
`
const LogoWip = styled.img`
  position: relative;
  z-index: 8;
  width: 100%;
  margin-top: 8vh;
  @media (min-width:801px) {
    width: 50%;
  }
  @media (min-width:1024px) {
   width: 40%;
  }
`
export default class componentName extends Component {
  render () {
    return (
      <Background bgImageUrl="static/img/home7.png">
        <div className="row text-center">
          <div className="col-12">
            <LogoWip src="static/img/Logo.png" alt="WIP CAMP" />
          </div>
          <div className="col-12">
            <Logo src="static/img/LogoCana.png" alt=" WIP Camp #11 ,คณะเทคโนโลยีสารสนเทศ , มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี " />
          </div>
          <div className="col-12">
            <Model className="center" wippo='static/img/wippo/original-1.png' alt="wippo" />
          </div>
        </div>
      </Background>
    )
  }
}
