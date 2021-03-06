import react from 'react'
import styled from 'styled-components'

const Minicon = styled.div`
  display:none;
  width:100%;
  height: 100vh;
  background-color: #F8E9D6;
  padding : 2vw;
  @media(orientation:portrait)
  and (max-width: 319px){
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
  @media(orientation:landscape)
  and (max-height: 550px){
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
`
const Img = styled.img`
  justify-content:center;
  width : 10vw;
`

const Link = styled.a`
  color: red;
`

const index = () => (
  <Minicon>
    <Img className="img-fluid" src="../static/img/Newmini.png"/>
    <p className="text-center mt-3">ปรับจอด้วยนะขอรับ</p>
  </Minicon>
)
export default index
