import styled from 'styled-components'
import font from '../../config/fonts'
import color from '../../config/color'

const Headline = styled.div`
  font-size: ${font.Headline};
  font-weight : bold;
  text-align : center;

  @media (min-width:320px) {
    font-size: 37px;
  }
  @media (min-width:412px) {
    font-size: 40px;
  }
  @media (min-width:576px) {
    font-size: 42px;
  }
  @media (min-width:768px) {
    font-size: 45px;
  }
  @media (min-width:1024px) {
    font-size: ${font.Headline};
  }
`
export const Subtitle = styled.div`
  font-size : ${font.Subtitle};
  font-weight:bold;
  margin-bottom:0.5em;
  color: #3A1E12;
`

export const ParagraphBold = styled.div`
  font-size :${font.Paragraph};
  font-weight : bold;
  
`

export const Paragraph = styled.div`
  font-size :${font.Paragraph};
  
`

export const Small = styled.div`
  font-size : ${font.Small};
  
`

export const TextBoxStyle = styled.div`
  font-size : ${font.TextBox};
  color : ${color.TextBox};
  
`

export const Font = styled.div`
color : #3A1E12;

  @media (min-width:320px) {
    font-size: 0.7em;
  }
  @media (min-width:412px) {
    font-size: 0.8em;
  }
  @media (min-width:576px) {
    font-size: 0.9em;
  }
  @media (min-width:768px) {
    font-size: 1em;
  }
  @media (min-width:1024px) {
    font-size: 1.1em;
  }
  @media (min-width:1100px) {
    font-size: 1.2em;
  }
`

export const FontWho = styled.p`
color : #3A1E12;

  @media (min-width:320px) {
    margin-left: 10px;
    margin-top : 2px;
    font-size: 12px;
  }
  @media (min-width:412px) {
    margin-left: 12px;
    font-size: 14px;
    margin-top : 10px;
  }
  @media (min-width:576px) {
    margin-left: 12px;
    font-size: 15px;
    margin-top : 5px;
  }
  @media (min-width:768px) {
    font-size: 15px;
    margin-top : 10px;
  }
  @media (min-width:1024px) {
    font-style: normal;
    font-size: 14px;
    margin-top : 13px;
  }
`
export const FontFAQs = styled.div`
  @media (min-width:320px){
    font-size: 9px;
  }
  @media (min-width:375px){
    font-size: 12px;
  }
  @media (min-width:1024px){
    font-size: 16px;
  }
`

export default Headline
