import styled, { css } from 'styled-components'
import theme from '../styles/theme'

export const Container = styled.div`
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased;
  max-width: 2000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  @media (min-width: ${theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${theme.screen.lg}) {
    max-width: 1200px;
  }

  @media (min-width: ${theme.screen.xl}) {
    max-width: 2000px;
  }
  ${props =>
    props.fluid &&
    `
    max-width: 2000px !important;
  `};
  @media print {
    margin-left: 3.5rem;
    div > span {
      break-inside: avoid;
    }

    div > figure {
      break-inside: avoid;
    }
  }
`

export const Section = styled.section`
  padding: 90px 0;
  overflow: hidden;
  a {
    transition: color 0.4s ease-out;
    position: relative;
    :hover {
      color: ${theme.color.secondary.S900};
      right: 0;
      text-decoration: none;
    }

    :before {
      border-bottom: 0.3em solid ${theme.color.supplementary.S300};
      content: '';
      position: absolute;
      z-index: -1;
      right: 100%;
      bottom: 0.14em;
      left: 0;
      right: 0;
      transition: all 0.4s cubic-bezier(0, 0.5, 0, 1),
        border-color 0.4s ease-out;
    }

    :hover:before {
      border-bottom: 1em solid;
      border-color: ${theme.color.supplementary.S400};
    }

    :hover:after {
      right: 0;
    }
  }
  small {
    ${theme.fontSize.xs};
  }
`

export const Grid1_1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  @media (max-width: ${theme.screen.lg}) {
  }
`

export const Grid2_3 = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 10px;
  @media (max-width: ${theme.screen.lg}) {
  }
`

export const Grid5_4 = styled.div`
  display: grid;
  grid-template-columns: 5fr 4fr;
  grid-gap: 10px;
  @media (max-width: ${theme.screen.lg}) {
  }
`
export const Grid4_5 = styled.div`
  display: grid;
  grid-template-columns: 4fr 5fr;
  grid-gap: 10px;
  @media (max-width: ${theme.screen.lg}) {
  }
`

export const Grid1_1_1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  @media (max-width: ${theme.screen.lg}) {
  }
`
export const Grid3_3_1 = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr;
  grid-gap: 10px;
  @media (max-width: ${theme.screen.lg}) {
  }
`

export const Row2_1 = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-gap: 10px;
`

export const H1 = styled.p`
  ${theme.fontSize.xxl};
  font-family: ${theme.font.primary};
  @media (max-width: ${theme.screen.md}) {
    ${theme.fontSize.xl};
  }
`

export const H2 = styled.p`
  ${theme.fontSize.xl};
  font-family: ${theme.font.primary};
  @media (max-width: ${theme.screen.md}) {
    ${theme.fontSize.lg};
  }
  @media print {
    ${theme.fontSize.xxl};
  }
`

export const H3 = styled.p`
  ${theme.fontSize.lg};
  font-family: ${theme.font.primary};
  @media (max-width: ${theme.screen.md}) {
    ${theme.fontSize.base};
  }
  color: ${theme.color.primary.S1000D} !important;
`

export const Button = styled.a`
  display: inline-block;
  padding: 9px 25px;
  margin: 0 10px 10px 0;
  width: auto;
  background: ${theme.color.primary.S100D} !important;
  color: ${theme.color.primary.S1000D} !important;
  border: 1px solid ${theme.color.primary.S500};
  transition: 0.4s all;
  font-family: ${theme.font.primary};
  ${theme.fontSize.sm};
  cursor: pointer;
  :hover {
    background: ${theme.color.primary.S100} !important;
  }
  a:hover {
    text-decoration: none !important;
  }
  :active {
    background: ${theme.color.primary.S300} !important;
  }
  ${props =>
    props.Light &&
    css`
      background: ${theme.color.primary.S700};
      color: ${theme.color.primary.S100D} !important;
      border: 1px solid ${theme.color.primary.S100D};
      :hover {
        background: ${theme.color.primary.S200D} !important;
      }
    `};
  ${props =>
    props.Tertiary &&
    css`
      border: 1px solid ${theme.color.primary.S700D};
      :hover {
        background: ${theme.color.white} !important;
      }
      :active {
        background: ${theme.color.primary.S300} !important;
      }
    `};
  ${props =>
    props.TertiaryDark &&
    css`
      border: 1px solid ${theme.color.primary.S300D};
      background: ${theme.color.primary.S1000D} !important;
      color: ${theme.color.primary.S100D} !important;
      :hover {
        background: ${theme.color.primary.S800D} !important;
      }
      :active {
        background: ${theme.color.primary.S700} !important;
      }
    `};
  ${props =>
    props.tertiaryLight &&
    css`
      background: ${theme.color.primary.S1000D};
      color: ${theme.color.primary.S100D} !important;
      border: 1px solid ${theme.color.primary.S100D};
      :hover {
        background: ${theme.color.primary.S1000} !important;
        color: ${theme.color.primary.S100D} !important;
        border: 1px solid ${theme.color.primary.S1000};
      }
    `};
  ${props =>
    props.BorderlessDark &&
    css`
      border: none;
      background: ${theme.color.primary.S700} !important;
      color: ${theme.color.primary.S100D} !important;
      :hover {
        background: ${theme.color.primary.S1000D} !important;
      }
      :active {
        background: ${theme.color.primary.S600} !important;
      }
    `};
  ${props =>
    props.BorderlessLight &&
    css`
      border: none;
      background: ${theme.color.white} !important;
      color: ${theme.color.primary.S1000D} !important;
      :hover {
        background: ${theme.color.primary.S100D} !important;
      }
      :active {
        background: ${theme.color.primary.S300} !important;
      }
    `};
  input[type='submit'] {
    border: none;
    border-radius: 0px;
    background: none;
  }
`

export const ButtonArrow = styled.a`
  display: inline-block;
  padding: 9px 0px;
  margin: 0 10px 10px 0;
  width: auto;
  :after {
    content: '>';
    margin-left: 10px;
    transition: all 0.5s;
  }
  :hover:after {
    margin-left: 15px;
  }
`

export const Form = styled.form`
  label {
    pointer-event: none;
  }
  input,
  textarea {
    display: inline-block;
    vertical-align: middle;
    border: 0;
    width: 100%;
    background: none;
    border-bottom: 1px solid ${theme.color.grayscale.S500};
    ${theme.fontSize.sm};
    color: ${theme.color.grayscale.S1000};
    padding: 0 10px;
    ::placeholder {
      ${theme.fontSize.sm};
    }
  }
  input:focus {
    border-bottom: 1px solid ${theme.color.primary.S400};
  }
  input[type='text'] {
    max-height: 35px;
  }
  textarea {
    padding-top: 10px;
  }
  input[type='text'],
  input[type='url'],
  textarea {
    background: ${theme.color.primary.S100D};
  }
  input:focus,
  textarea:focus {
    border: none;
    border-radius: none;
    outline: none;
  }
  input[type='submit']:focus {
    border: none;
    outline: none;
  }
  input[type='file'] {
    border: none;
    outline: none;
  }
  input [type='button'] {
    color: white !important;
  }
  input[type='file'] {
    border: none;
    border-radius: 0px;
    background: none;
    padding: 0;
    :focus {
      border-bottom: none;
    }
  }
`
