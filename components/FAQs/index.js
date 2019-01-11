import React, { Component } from 'react'
import styled from 'styled-components'
import { Accordion, AccordionItem } from 'react-sanfona'
import { ParagraphBold, Paragraph } from '../Core/Texts'
import Headline, { Subtitle, Paragragh, Small} from '../Core/Texts'

const Head = styled.div`
  text-align : center;
`
const BoxStyle = styled.div`
    background: papayawhip;
    @media (min-width:320px) {
      padding : 1.5em 1em;
    }
    
    @media (min-width:576px) {
      padding : 1em 2em;
    }
    
    @media (min-width:1024px) {
      padding : 2em 5em;
    }
`
const Layout = styled.div`  
  margin-top: 4.5%;
  margin-bottom: 10%;
  border: .2em solid transparent;
  border-radius: 2em;
  padding:2em;
`


export default class index extends Component {
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
    return (
      <div className="container">
        <div className="row justify-content-center">
          <Layout className="col-12 col-sm-12 col-md-12 col-lg-12">
            <Head className="text-center col-12">
              <Headline>FAQs</Headline>
              <Subtitle>คำถามที่พบบ่อย?</Subtitle>
            </Head>
            <BoxStyle>
        <Accordion>
          {[0, 1, 2, 3, 4, 5].map(item => {
            return (
              <AccordionItem title={`Q: ${this.state.question[item]} ?`} >         
                {`A: ${this.state.answer[item]}`}
              </AccordionItem>
            )
          })}
        </Accordion>
        </BoxStyle>
      </Layout>
        </div>
      </div>
    )
  }
}

//expanded={item === 0}