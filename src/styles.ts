import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  rosaHeader: '#E667670D',
  rosaClaro: '#FFEBD9',
  branco: '#FFFFFF',
  background: '#FFF8F2',
  opacidade: '#00000080',
  preto: '#000'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:Roboto, sans-serif;
    list-style: none;
    text-decoration: none;

  }

  body{
    background-color: ${cores.background};
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
