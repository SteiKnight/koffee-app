import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   html {
      height: 100%;
   }

   body {
      background-color:#AC6B68;
      background-size: cover;
      margin:0;
      padding: 0 20px;
      display:flex;
      flex-direction: column
   }

   *{
      font-family: Outfit, monospace;
   }
`
export const Wrapper = styled.div`

`

