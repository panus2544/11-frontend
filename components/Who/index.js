import React, { Component } from 'react'
import styled from 'styled-components'
import Headline, { Paragraph, FontWho } from '../Core/Texts'
import { PDBox, TextBoxWho, IconWho  } from '../Core/ResponBox'
import Model from '../Core/Model'
import Background from '../Core/Background'

const TextPosition = styled.div`  
  margin-left:1em;
  transform: translate(0, 10%);
  @media (min-width:768px){
    transform: translate(0, 50%);
  }
`

const IconInfo = [
  { icon: '/static/img/icon-who/bed.png', text: 'น้อง ๆ ที่สามารถอยู่ร่วมค่ายค้างคืนได้ตลอดระยะเวลา 5 วัน 4 คืน' },
  { icon: '/static/img/icon-who/graduate.png', text: 'น้อง ๆ มัธยมศึกษาตอนปลายแผนการเรียนวิทย์-คณิต ศิลป์-คำนวณ' },
  { icon: '/static/img/icon-who/person.png', text: 'น้อง ๆ ที่ได้รับอนุญาตจากผู้ปกครอง โดยมีเอกสารเป็นลายลักษณ์อักษรถูกต้อง' },
  { icon: '/static/img/icon-who/computer.png', text: 'น้อง ๆ ที่มีความสนใจด้านไอทีหรือต้องการค้นหาตนเองเพื่อศึกษาต่อ' }
]

export default class componentName extends Component {
  render () {
    return (
      <Background bgImageUrl = "static/img/who.png">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-10">
              <h1><Headline>Who</Headline></h1>
              <div className="row justify-content-center">
                <PDBox>
                  {IconInfo.map((data, i) => (
                    <div className="my-2 mx-1" key={i}>
                      <TextBoxWho>
                        <div className="row">
                          <div className ="col-2" >
                            <IconWho key={i} src={data.icon} />
                          </div>
                          <div className="col-10 pl-0">
                            <TextPosition>
                              <Paragraph>
                                <FontWho key={i}>{data.text}</FontWho>
                              </Paragraph>
                            </TextPosition>
                          </div>
                        </div>
                      </TextBoxWho>
                    </div>
                  ))}
                </PDBox>
              </div>
            </div>
            <Model wippo='wippoWho.png' alt="wippo" />
          </div>
        </div>
      </Background>
    )
  }
}
