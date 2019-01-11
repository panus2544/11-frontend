import styled from 'styled-components'

export const MTBox = styled.div`
    @media (min-width:320px) {
        margin-top:1.5em;
    }
    @media (min-width:420px) {
        margin-top:1.5em;
    }
    @media (min-width:576px) {
        margin-top:3em;
    }
    @media (min-width:768px) {
        margin-top:3em;
    }
    @media (min-width:1024px) {
        margin-top:5em;
    }
`

export const PDBox = styled.div`
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

export const WDBox = styled.div`
    @media (min-width:320px) {
        width:4em;
    }
    @media (min-width:420px) {
    
      width:5em;
    }
    @media (min-width:576px) {
      width:5em;
    }
    @media (min-width:768px) {
      width:7em;
    }
    @media (min-width:1024px) {
      width:7em;
    }
`
