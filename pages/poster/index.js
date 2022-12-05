import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Grid5_4 } from '../../styles/global'
import PicTopLeft from './src/PicTopLeft'
//import PicTopRight from "./src/PicTopRight";
import QRCode from 'qrcode.react'
import 'react-day-picker/src/style.css'
import PhotoTop1 from './src/123.png'
import PhotoTop2 from './src/123.png'
import PhotoTop3 from './src/123.png'
import PhotoTop4 from './src/123.png'
import PhotoTop5 from './src/123.png'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

class RandomPic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      randomBgValue: null,
    }
  }
  render() {
    const jsonData = [PhotoTop1, PhotoTop2, PhotoTop3, PhotoTop4, PhotoTop5]
    const bgvalues = Object.values(jsonData)
    if (this.state.randomBgValue == null) {
      this.setState({
        randomBgValue: bgvalues[parseInt(Math.random() * bgvalues.length)],
      })
    }
    const randomBgValue = this.state.randomBgValue
    return <Image loader={myLoader} src={randomBgValue} alt="top of poster" />
  }
}

const DateFormat = { month: 'long', day: 'numeric' }
const WdayFormat = { weekday: 'short' }
const Poster = ({
  title,
  subTitle,
  speakerName1,
  speakerInfo1,
  speakerName2,
  speakerInfo2,
  hostName,
  hostInfo,
  commentatorName,
  commentatorInfo,
  abtTalk,
  abtSpeaker,
  date,
  time,
  selectedPlace,
  selectedQR,
  notes1,
  notes2,
  notes3,
  organizer,
  coOrganizer,
  url,
  pictures,
  lang,
}) => (
  <Frame>
    {pictures ? (
      <BookCover>
        <img src={pictures} alt="Error, please upload again." />
      </BookCover>
    ) : (
      ''
    )}
    <Canvas>
      <DecoShapeL>
        <PicTopLeft />
      </DecoShapeL>
      <DecoShapeR />
      <DecoTxtR>Thursday Sociology</DecoTxtR>
      <DecoTxtL>
        Sociology Talks <br />
        Department of Sociology
        <br />
        National Taiwan University
      </DecoTxtL>
      {pictures ? <DecoBg /> : <RandomPic />}
    </Canvas>
    <Info>
      <BorderTitle>
        <Caption>Title</Caption>
        <Title>{title ? title : '請輸入演講標題'}</Title>
        <SubTitle>{subTitle ? subTitle : '請輸入演講副標題'}</SubTitle>
      </BorderTitle>
      <BorderSpeaker>
        <Grid5_4>
          <Box>
            <Caption>Speaker</Caption>
            <H1>{speakerName1 ? speakerName1 : '講者 名稱'}</H1>
            <H3>{speakerInfo1 ? speakerInfo1 : '講者任職單位 職稱'}</H3>
            <br />
            {speakerName2 ? (
              <>
                <H1>{speakerName2}</H1>
                <H3>{speakerInfo2}</H3>
              </>
            ) : (
              <></>
            )}
            {hostName ? (
              <>
                <Caption>Host</Caption>
                <H2>{hostName}</H2>
                <H3>{hostInfo}</H3>
              </>
            ) : (
              <>
                <Caption>Host</Caption>
                <H2>主持人 姓名</H2>
                <H3>主持人任職單位 職稱</H3>
              </>
            )}
            {commentatorName ? (
              <>
                <Caption>Commentator</Caption>
                <H2>{commentatorName}</H2>
                <H3>{commentatorInfo}</H3>
              </>
            ) : (
              ''
            )}
          </Box>
          <Box>
            <Caption>Talk Info</Caption>
            <Abt_P lang={lang}>
              {abtTalk
                ? abtTalk
                : '請填入內容以取代此示例文字：代謝運動源於1950年代，由一批年輕的日本建築師及設計師聯手推行的建築設計運動，黑川紀章設計的中銀膠囊塔是其中一個代表作品。其理念是建築物由一些可拆換的模塊組成，透過逐漸拆換模塊在多年後也許整棟建築都由新模塊組成，而達成一種動態更新。'}
            </Abt_P>

            <Caption>Speaker Info</Caption>
            <Abt_P lang={lang}>
              {abtSpeaker
                ? abtSpeaker
                : "Please complete the form to replace this desciption: Generative design is an iterative design process that involves a program that will generate a certain number of outputs that meet certain constraints, and a designer that will fine tune the feasible region by selecting specific output or changing input values, ranges and distribution. The designer doesn't need to be a human, it can be a test program in a testing environment or an artificial intelligence, for example a generative adversarial network. The designer learns to refine the program (usually involving algorithms) with each iteration as their design goals become better defined over time."}
            </Abt_P>
          </Box>
        </Grid5_4>
      </BorderSpeaker>
      <BorderTimePlace>
        <Grid5_4>
          <Box>
            <Caption>Time & Place</Caption>
            <TimePlace>
              <Time>
                {date ? (
                  <Date>
                    {date.toLocaleDateString('en', DateFormat)},{' '}
                    {date.toLocaleDateString('en', WdayFormat)}.
                  </Date>
                ) : (
                  <Date>選擇日期</Date>
                )}
                {time ? time.value : '選擇時間'}
              </Time>
            </TimePlace>
            <Time>{selectedPlace ? selectedPlace.value : '選擇地點'}</Time>

            <Org>
              <Caption>Organizer</Caption>
              <H3>{organizer ? organizer : '國立臺灣大學社會學系'}</H3>
              <H3>
                {coOrganizer ? (
                  <>
                    <Caption>Co-organizer</Caption>
                    {coOrganizer}
                  </>
                ) : (
                  <></>
                )}
              </H3>
            </Org>
          </Box>
          <Box>
            <Grid_BottomRight>
              <Item_BottomRight>
                <Caption>Notes</Caption>
                <Abt_P lang={lang}>
                  {notes1 ? (
                    <>＊ {notes1}</>
                  ) : (
                    <>
                      ＊因應本校防疫措施，與會者請攜帶口罩，且須填具本報名表始得參加。本報名表中所蒐集個人資料僅為辦理本場演講上防疫目的使用。
                    </>
                  )}
                </Abt_P>
                <Abt_P lang={lang}>
                  {notes2 ? (
                    <>＊ {notes2}</>
                  ) : (
                    <>
                      ＊倘若14天內有類流感症狀：發燒（≧37.5℃）、咳嗽、喉嚨痛、呼吸道窘迫、流鼻水、肌肉或關節酸痛、頭痛等，請勿參加。
                    </>
                  )}
                </Abt_P>
                <Abt_P lang={lang}>{notes3 ? <>＊ {notes3}</> : <></>}</Abt_P>
              </Item_BottomRight>
              <Item_BottomRight>
                <Caption>More</Caption>
                <H3>{selectedQR ? <>{selectedQR.value}</> : <></>}</H3>
                <QR>
                  {url ? (
                    <QRCode
                      value={url}
                      bgColor="#fafafa"
                      fgColor="#000"
                      includeMargin="true"
                    />
                  ) : (
                    <QRCode
                      value="https://www.google.com"
                      bgColor="#fafafa"
                      fgColor="#000"
                      includeMargin="true"
                    />
                  )}
                </QR>
              </Item_BottomRight>
            </Grid_BottomRight>
          </Box>
        </Grid5_4>
      </BorderTimePlace>
    </Info>
  </Frame>
)

export default Poster

// GLOBAL
const posterTheme = {
  border:
    'position: absolute;height: 100%;width: 100%;top:0;left:0;padding: 5px 10px;padding: 1% 4%;@media print{padding: 30px;} @media print and (max-width: 30cm){padding: 38px;}',
  font: {
    display: `'Noto Sans TC', sans-serif`,
    primary: `'Pragati Narrow', sans-serif`,
    secondary: `'Kameron', serif`,
  },
  fontSize: {
    xxxs: 'font-size: 0.4rem !important; line-height: 0.75rem',
    xxs: 'font-size: 0.6rem !important; line-height: 1.0rem',
    xs: 'font-size: 0.7rem !important; line-height: 1.1rem',
    sm: 'font-size: 0.8rem !important; line-height: 1.3rem',
    base: 'font-size: 1rem !important; line-height: 1.9rem',
    lg: 'font-size: 1.2rem !important; line-height: 2.0rem',
    xl: 'font-size: 2rem !important; line-height: 3.2rem',
    xxl: 'font-size: 3.3rem !important; line-height: 4.6rem',
    xxxl: 'font-size: 5rem !important; line-height: 6.5rem',
  },
  color: {
    white: '#FFFFFF',
    black: '#000000',
    primary: {
      S100: '#E3FCFF',
      S200: '#C2ECF9',
      S300: '#92CEEF',
      S400: '#2A92DD',
      S500: '#0064C1',
      S600: '#09468E',
      S700: '#042B66',
      S800: '#012249',
      S900: '#000928',
      S1000: '#000212',
      S100D: '#F7FAFA',
      S200D: '#F2F7F8',
      S300D: '#EAEFF2',
      S400D: '#D2DCE4',
      S500D: '#B9C4CD',
      S600D: '#78818C',
      S700D: '#565C65',
      S800D: '#353D46',
      S900D: '#181A22',
      S1000D: '#0A0B10',
    },
    secondary: {
      S100: '#E4FFE3',
      S200: '#C2F9CB',
      S300: '#92EFAC',
      S400: '#2ADD87',
      S500: '#00C17C',
      S600: '#098E5E',
      S700: '#04664E',
      S800: '#01493B',
      S900: '#002820',
      S1000: '#001211',
      S100D: '#F8FFF8',
      S200D: '#F1FBF3',
      S300D: '#E4F3E8',
      S400D: '#D9E8E1',
      S500D: '#B1C2BC',
      S600D: '#899892',
      S700D: '#5A6865',
      S800D: '#3D4745',
      S900D: '#232928',
      S1000D: '#0D1111',
    },
    supplementary: {
      S100: '#FFFBE9',
      S200: '#FFF4BB',
      S300: '#FFEA92',
      S400: '#FFDF5A',
      S500: '#FFD00D',
      S600: '#FFBC00',
      S700: '#F29B00',
      S800: '#ED8100',
      S900: '#D16800',
      S1000: '#BB4F00',
    },
    grayscale: {
      S100: '#FAFAFA',
      S200: '#F5F5F5',
      S300: '#EEEEEE',
      S400: '#E0E0E0',
      S500: '#BDBDBD',
      S600: '#9E9E9E',
      S700: '#757575',
      S800: '#616161',
      S900: '#424242',
      S1000: '#212121',
    },
    decorative: {
      Orange: '#FE8B25',
      SkyBlue: '#DAEEFE',
      Yellow: '#FEF37C',
      Green: '#3D7551',
      Prune: '#742723',
    },
  },
  screen: {
    xs: '575px',
    sm: '767px',
    md: '991px',
    lg: '1199px',
    xl: '2000px',
    xxl: '3000px',
  },
}

// POSITION BOX
const Frame = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: #fff;
  left: 0;
  font-family: ${posterTheme.font.display};
  font-weight: bold;
  background: ${posterTheme.color.white};
  @media only screen and (max-width: ${posterTheme.screen.md}) {
    min-height: 500px;
  }
  @media print {
    background: ${posterTheme.color.white};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    margin: auto;
    margin-top: 0px !important;
  }
`
const DecoTheme = {
  all: 'position: absolute;top: 0;bottom: 0;height: 100%;',
  left:
    'left: 0;@keyframes L {0%{width: 30%;}50%{width: 55%;}100% {width:30%;}};',
  right:
    'right: 0;@keyframes R {0%{width: 70%;}50%{width: 45%;}100% {width:70%;}};',
  colorA:
    '@keyframes TxtSvgA {0%{color:#003108;}12.5%{color:#303030;}25%{color:#360D00;}37.5%{color:#001E4A;}50%{color:#3A004E;}62.5%{color:#003108;}75%{color:#281600;}87.5%{color:#272625;}100%{color:#003108;}};@keyframes BgA {0%{background-color:#003108;}12.5%{background-color:#303030;}25%{background-color:#360D00;}37.5%{background-color:#001E4A;}50%{background-color:#3A004E;}62.5% {background-color:#003108;}75%{background-color:#281600;}87.5%{background-color:#272625;}100%{background-color:#003108;}};',
  colorB:
    '@keyframes TxtSvgB {0%{color:#6DAA77;}12.5%{color:#A7A7A7;}25%{color:#9C6756;}37.5%{color:#2B578B;}50%{color:#9675A2;}62.5%{color:#318B70;}75%{color:#AFDB77}87.5%{color:#DBBF77;}100%{color:#6DAA77;}};',
  colorC:
    '@keyframes TxtSvgC {0%{color:#ECDA9A;}12.5%{color:#F59D89;}25%{color:#EA6D51;}37.5%{color:#E6F4AE;}50%{color:#FFCFE3;}62.5% {color:#ECDA9A;}75%{color:#A3D3CB}87.5%{color:#C5D2A9;}100%{color:#E1CE8B;}};@keyframes BgC {0%{background-color:#ECDA9A;}12.5%{background-color:#F59D89;}25%{background-color:#EA6D51;}37.5%{background-color:#E6F4AE;}50%{background-color:#FFCFE3;}62.5% {background-color:#ECDA9A;}75%{background-color:#A3D3CB}87.5%{background-color:#C5D2A9;}100%{background-color:#E1CE8B;}};',
}
const Canvas = styled.div`
  position: relative;
  ${DecoTheme.colorC} animation: BgC 6s infinite;
  overflow: hidden;
  height: 30%;
  width: 100%;
  img {
    float: right;
    right: 0;
    width: 70%;
  }
  @media print {
    height: 30%;
  }
`
const Info = styled.div`
  font-family: ${posterTheme.font.display};
  color: ${posterTheme.color.primary.S1000};
`
const Box = styled.div`
  position: relative;
  border-top: 1px solid #ccc;
`
const DecoTxtL = styled.div`
  ${DecoTheme.all} ${DecoTheme.left}
  animation: L 8s infinite;
  z-index: 4;
  font-family: ${posterTheme.font.secondary};
  color: ${posterTheme.color.white};
  font-size: 0.5rem;
  line-height: 0.6rem;
  text-align: right;
  padding: 5px;
  @media print {
    top: 10px;
    ${posterTheme.fontSize.base};
  }
`
const DecoShapeL = styled.div`
  ${DecoTheme.all}
  ${DecoTheme.left}
  ${DecoTheme.colorA}
  ${DecoTheme.colorC}
  animation: L 8s infinite, TxtSvgC 6s infinite, BgA 6s infinite;
  z-index: 2;
  color: ${posterTheme.color.grayscale.S600};
`
const DecoTxtR = styled.div`
  ${DecoTheme.all}
  ${DecoTheme.right}
  ${DecoTheme.colorA}
  animation: R 8s infinite, TxtSvgA 6s infinite;
  z-index: 3;
  font-family: ${posterTheme.font.secondary};
  color: ${posterTheme.color.primary.S800};
  font-size: 30px;
  line-height: 20px;
  padding: 5px;
  @media print{
    font-size: 140px;
    line-height: 100px;
  }  
  @media print and (max-width: 30cm){
    font-size: 80px;
    line-height: 60px;
  }
`
const DecoShapeR = styled.div`
  ${DecoTheme.all} ${DecoTheme.right}
  color: white;
  opacity: 0.5;
  animation: R 8s infinite;
  z-index: 2;
`
const DecoBg = styled.div`
  width: 100%;
  height: 1000px;
  ${DecoTheme.colorC};
  animation: BgC 6s infinite;
`
const BookCover = styled.div`
  position: absolute;
  bottom: 80%;
  left: 55.6%;
  z-index: 999;
  width: 400px;
  height: auto;
  max-height: 100px;
  img {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border: 5px solid white;
    max-height: 25vh;
  }
  @media only screen and (max-width: ${posterTheme.screen.lg}) {
    bottom: 40%;
  }
  @media only screen and (max-width: ${posterTheme.screen.xl}) {
    bottom: 80%;
  }
  @media print {
    height: auto;
    width: 25%;
    img {
      max-height: 30%;
      border: 10px solid white;
    }
  }
`
const BorderTitle = styled.div`
  ${posterTheme.border} z-index: 100;
  top: 30%;
`
const BorderSpeaker = styled.div`
  ${posterTheme.border} z-index: 101;
  top: 45%;
`
const BorderTimePlace = styled.div`
  ${posterTheme.border} z-index: 105;
  top: 78%;
`

// FONT
const Caption = styled.div`
  postion: relative;
  width: auto;
  left: 0;
  right: 0;
  margin: 15px 0 0 0;
  font-family: ${posterTheme.font.secondary};
  ${posterTheme.fontSize.xxs};
  ${DecoTheme.colorB};
  animation: TxtSvgB 6s infinite;
  @media only screen and (max-width: ${posterTheme.screen.xl}) {
    ${posterTheme.fontSize.xxxs};
    margin: 5px 0 0 0;
  }
  @media print {
    margin: 20px 0px 10px 0;
    ${posterTheme.fontSize.xs};
  }
  @media print and (max-width: 30cm) {
    ${posterTheme.fontSize.xxs};
    margin: 10px 0px 4px 0;
  }
`

const Title = styled.div`
  @media only screen and (max-width: ${posterTheme.screen.xl}) {
    font-size: 1.8rem !important;
    line-height: 2.7rem;
  }
  @media only screen and (min-width: ${posterTheme.screen.xl}) {
    ${posterTheme.fontSize.xxl};
  }
  @media print {
    ${posterTheme.fontSize.xxxl};
  }
  @media print and (max-width: 30cm) {
    ${posterTheme.fontSize.xxl};
  }
`

const SubTitle = styled.div`
  ${posterTheme.fontSize.lg};
  @media print {
    ${posterTheme.fontSize.xxl};
    margin: 20px 0;
  }
  @media print and (max-width: 30cm) {
    ${posterTheme.fontSize.xl};
    margin: 10px 0;
  }
`
const H1 = styled.div`
  ${posterTheme.fontSize.xl};
  @media only screen and (max-width: ${posterTheme.screen.xl}) {
    font-size: 1.4rem !important;
    line-height: 2rem;
  }
  @media only screen and (max-width: ${posterTheme.screen.lg}) {
    font-size: 1rem !important;
    line-height: 1.5rem;
  }
  @media print {
    font-size: 4rem !important;
    line-height: 5rem;
  }
  @media print and (max-width: 30cm) {
    ${posterTheme.fontSize.xl};
  }
`
const H2 = styled.div`
  @media only screen and (min-width: ${posterTheme.screen.xl}) {
    ${posterTheme.fontSize.lg};
  }
  @media only screen and (max-width: ${posterTheme.screen.lg}) {
    ${posterTheme.fontSize.sm};
  }
  @media print {
    ${posterTheme.fontSize.xxl};
  }
  @media print and (max-width: 30cm) {
    ${posterTheme.fontSize.lg};
  }
`
const H3 = styled.div`
  ${posterTheme.fontSize.sm};
  @media only screen and (max-width: ${posterTheme.screen.xl}) {
    ${posterTheme.fontSize.xs};
  }
  @media only screen and (max-width: ${posterTheme.screen.lg}) {
    ${posterTheme.fontSize.xxs};
  }
  @media print {
    ${posterTheme.fontSize.xl};
  }
  @media print and (max-width: 30cm) {
    ${posterTheme.fontSize.base};
  }
`
const Abt_P = styled.div`
  white-space: pre-wrap;
  margin-bottom: 5px;
  text-align: ${props => (props.lang === true ? 'justify' : 'left')};
  @media only screen and (max-width: ${posterTheme.screen.xl}) {
    ${posterTheme.fontSize.xxxs};
  }
  @media only screen and (min-width: ${posterTheme.screen.xl}) {
    ${posterTheme.fontSize.xxs};
  }
  @media print {
    ${posterTheme.fontSize.base};
  }
  @media print and (max-width: 30cm) {
    ${posterTheme.fontSize.xs};
  }
`

const Date = styled.span`
  ${posterTheme.fontSize.lg};
  margin-right: 15px;
  @media print {
    margin-right: 20px;
    ${posterTheme.fontSize.xl};
  }
`
const TimePlace = styled.div`
  display: flex;
  flex-direction: row;
`
const Time = styled.div`
  ${posterTheme.fontSize.base};
  margin-right: 15px;
  font-family: ${posterTheme.font.secondary};
  @media print {
    font-size: 2.4rem !important;
    line-height: 2rem;
    margin-right: 20px;
  }
  @media print and (max-width: 30cm) {
    ${posterTheme.fontSize.lg};
  }
`
const Grid_BottomRight = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 50px;
  grid-gap: 15px;
  @media only screen and (min-width: ${posterTheme.screen.xl}) {
    grid-template-columns: minmax(0, 1fr) 100px;
  }
  @media print {
    grid-template-columns: minmax(0, 1fr) 200px;
    grid-gap: 10px;
  }
  @media print and (max-width: 30cm) {
    grid-template-columns: minmax(0, 1fr) 100px;
  }
`

const Item_BottomRight = styled.div`
  position: relative;
  min-width: 0;
`

const Org = styled.div`
  position: relative;
  min-width: 0;
`

const QR = styled.div`
  postion: relative;
  canvas {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 50px;
    object-fit: contain;
  }
  @media only screen and (min-width: ${posterTheme.screen.xl}) {
    canvas {
      max-height: 100px;
    }
  }
  @media print {
    canvas {
      max-height: none;
    }
  }
  @media print and (max-width: 30cm) {
    canvas {
      max-height: 100px;
    }
  }
`
