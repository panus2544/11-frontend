import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, FontFAQs } from '../Core/Texts'
import Model from '../Core/Model'
import { PDBox } from '../Core/ResponBox'
import Background from './background'
import Bg from '../Core/Bg'
import WippoFAQ from '../Core/WippoFAQ'

const QuestionText = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: black;
  background-color: #E0D6C2!important;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover{

  }
`

const AnswerText = styled.div`
  background-color: #CDB4A2!important;
`

const Span = styled.span`
  &:before{
      content: '\\2228'; 
      float: right;
      margin-left: 5px;
  } 
`

export default class Question extends Component {
  state = {
    question: ['อยากเป็นส่วนหนึ่งของค่ายนี้มาก ๆ ต้องทำอย่างไร',
      'ไม่มีความรู้เกี่ยวกับคอมพิวเตอร์มากนัก จะเข้าค่ายนี้ได้ หรือไม่',
      'ค่ายนี้เป็นค่ายวิชาการ เครียดมากไหม มีกิจกรรมไหม',
      'นอนที่ไหน ห้องน้ำเป็นอย่างไรบ้าง',
      'น้อง ๆ จะได้รับอะไรจากการมาค่าย',
      'ค่ายนี้มีค่าใช้จ่ายไหม ถ้ามีต้องจ่ายเท่าไหร่'],
    answer: ['น้องเอ๋ย สิ่งที่น้องต้องทำมีเพียงตอบคำถามในการสมัครด้วยตัวเองเพื่อแสดงถึงตัวตนของน้อง จงใช้ความตั้งใจในการตอบคำถาม และอีกสิ่งหนึ่งที่จะลืมไม่ได้ น้องเอ๋ย โปรดจงอัพโหลดเอกสารให้ครบถ้วน และถูกต้องตามที่กำหนดเสียด้วย',
      'น้องเอ๋ย ไม่มีใครเก่งทุกอย่างได้โดยไร้การฝึกฝน เพียงแค่น้องมีความมุ่งมั่นที่จะศึกษาเรียนรู้ หรือมีพื้นฐานมาทางด้านไอทีมาบ้าง และเปิดใจที่จะทำความเข้าใจในโลกไอที น้องก็สามารถสมัครค่ายนี้ได้',
      'ค่ายนี้เต็มที่ทั้งวิชาการ และกิจกรรม น้องเอ๋ย น้องจะได้รับทั้งความรู้ และความสนุกสนาน น้องไม่ต้องกลัวว่าจะเครียด หรือว่าค่ายนี้จะโหด พี่ ๆ ทุกคนในค่ายเป็นกันเอง พี่ ๆ พร้อมให้ความรู้และความบันเทิงแก่น้อง ๆ ตลอดเวลา',
      'น้องเอ๋ย น้องจะได้พักค้างแรมภายในหอพักของทางมหาวิทยาลัย ซึ่งจะมีพี่ ๆ คอยดูแลตลอด 24 ชั่วโมง รวมถึงพี่พยาบาลที่จะช่วยเหลือในกรณีน้อง ๆ ไม่สบาย และพร้อมจะปฐมพยาบาลเบื้องต้นให้น้อง ๆ ตลอดระยะเวลาค่าย น้อง ๆ สามารถบอกผู้ปกครองได้เลยว่าไม่ต้องกังวล',
      'น้องจะได้รู้ว่ากล่องดวงใจสำหรับตัวน้องคืออะไร น้องจะได้รับความรู้ด้านไอที จากพี่ ๆ หลักสูตรเทคโนโลยีสารสนเทศ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรีครับ รวมถึงความสนุกสนานที่พี่ ๆ เตรียมไว้สำหรับน้อง ๆ ทุกคน อีกทั้งยังได้มิตรภาพจากเพื่อน ๆ และพี่ ๆ ภายในค่าย ที่สำคัญนะน้องเอ๋ย น้องจะได้รับประกาศนียบัตรจากทางค่าย เพื่อรับรองว่าน้องได้มาเข้าค่ายนี้',
      'ค่ายนี้มีค่าใช้จ่าย 450 บาท น้องเอ๋ย สามารถชำระได้ผ่านธนาคาร ติดตามได้ทางแฟนเพจนะน้องเอ๋ย']
  };


  render() {
    const CollapseItem = (props) => (
        <FontFAQs>
          <QuestionText className="card-link bg-secondary" data-toggle="collapse" href={`#collapse${props.num}`}>
            <div className="card-header px-4" >
              Q : {this.state.question[props.number]} ? <Span/>
            </div>
          </QuestionText>
          <div id={`collapse${props.num}`} className={`collapse ${props.first}`} data-parent="#accordion">
            <AnswerText className="card-body bg-light px-4">
              A : {this.state.answer[props.number]} 
            </AnswerText>
          </div>
        </FontFAQs>
    )
    return (
    <Bg>
      <Background />
      <WippoFAQ wippo='wippoFAQs.png' />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-10">
            <div className="row">
              <div className="text-center col-12 mb-4">
                  <h1><Headline>FAQs</Headline></h1>
                  <b><Subtitle>คำถามที่พบบ่อย?</Subtitle></b>
              </div>
              <div className="col-12">
                <div className ="pb-4">
                  <div className="col-12"> 
                    <div id="accordion">
                      <CollapseItem num='One' number='0' />
                      <CollapseItem num='Two' number='1' />
                      <CollapseItem num='Three' number='2' />
                      <CollapseItem num='Four' number='3' />
                      <CollapseItem num='Five' number='4' />
                      <CollapseItem num='Six' number='5' />
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Bg>
    )
  }
}