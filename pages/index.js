import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import theme from '../styles/theme'
import { Button, H3, Form, Grid2_3 } from '../styles/global'
import Collapse from '../components/collapse'
import Calendar from '../components/calendar'
import ImgUpload from '../components/img_upload'
import Poster from './poster'


const Grid = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${theme.color.primary.S700D};
  @media print {
    background: ${theme.color.white};
  }
`

const Input = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  padding: 50px;
  background: ${theme.color.primary.S300D};
  overflow: auto;
  @media (max-width: ${theme.screen.md}) {
    position: relative;
    width: 100%;
  }
  @media print {
    display: none;
    width: 0%;
  }
`

const Output = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50%;
  background: ${theme.color.secondary.S900D};
  overflow: hidden;
  @media (max-width: ${theme.screen.md}) {
    position: relative;
    width: 100%;
    height: auto;
  }
  @media print {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    margin: auto;
    margin-top: 0px !important;
    border: 1px solid;
  }
  @page {
    size: A4;
    margin: 0;
  }
`

 const InputBox = styled.div`
  margin-bottom: 30px;
`

const InputItem = styled.div`
  position: relative;
  margin-bottom: 25px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 10px;
  label {
    color: ${theme.color.grayscale.S1000};
  }
  input {
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
  select {
    border: none;
    padding: 0 10px;
    max-height: 30px;
  }
`

const InputItemFlex = styled.div`
  position: relative;
  margin-bottom: 15px;
  label {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    div {
      margin-right: 10px;
    }
  }
`

const LifeViewBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 30px 50px;
  @media (max-width: ${theme.screen.md}) {
    position: relative;
    overflow: show;
    height: auto;
    margin: 2% 3%;
  }
  @media only screen and (max-width: ${theme.screen.lg}) {
    margin: 3% 4%;
  }
  @media only screen and (max-width: ${theme.screen.xl}) {
    margin: 3% 4%;
  }
  @media only screen and (max-width: ${theme.screen.xxl}) {
    max-width: 1200px;
    margin: 3% 4%;
  }
  @media only screen and (min-width: ${theme.screen.xxl}) {
    max-width: 1200px;
    margin: 5% 10%;
  }
  @media print {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    margin: auto;
    margin-top: 0px !important;
    border: 1px solid;
  }
`


const placeList = [
  { value: 'Room 401', label: 'Room 401' },
  { value: 'Room 101', label: 'Room 101' },
  { value: 'Room 319', label: 'Room 319' },
  { value: 'Room 318B', label: 'Room 318B' },
]
const QRList = [
  { value: '????????????', label: '????????????' },
  { value: '???????????????', label: '???????????????' },
]
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: '0',
    borderRadius: '0',
    background: '#F7FAFA',
    borderBottom: '1px solid #aaaaaa',
    color: '#000',
  }),
  menu: (provided, state) => ({
    border: '0',
    background: '#F7FAFA',
    borderBottom: '1px solid #aaaaaa',
    color: '#000',
  }),
}
class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      subTitle: null,
      speakerName1: null,
      speakerInfo1: null,
      speakerName2: null,
      speakerInfo2: null,
      hostName: null,
      hostInfo: null,
      commentatorName: null,
      commentatorInfo: null,
      abtTalk: null,
      abtSpeaker: null,
      date: null,
      time: null,
      selectedPlace: null,
      selectedQR: null,
      organizer: null,
      coOrganizer: null,
      url: null,
      pictures: null,
      notes1: null,
      notes2: null,
      notes3: null,
      lang: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleToggleChange = this.handleToggleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCallback = this.handleCallback.bind(this)
    this.coverCallback = this.coverCallback.bind(this)
  }

  handleCallback = childData => {
    this.setState({
      date: childData.selectedDay,
      time: childData.selectedTime,
    })
  }

  coverCallback = childData => {
    this.setState({
      pictures: childData.preview,
    })
  }

  selectPlaceChange = selectedPlace => {
    this.setState({ selectedPlace })
  }
  selectQRChange = selectedQR => {
    this.setState({ selectedQR })
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
    console.log(this.state)
  }

  handleToggleChange() {
    this.setState(prevState => ({
      lang: !prevState.lang,
    }))
    console.log(this.state.lang)
  }

  handleSubmit(event) {
    this.props.parentCallback(this.state)
    event.preventDefault()
  }

  onPrint(e) {
    e.preventDefault()
    window.print()
  }

  render() {
    const { selectedPlace } = this.state
    const { selectedQR } = this.state

    const { lang } = this.state
    return (
      <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <H3>
          <b>Poster Creator</b>
          <br />
          <small>Department of Sociology, NTU</small>
        </H3>
        <Form onSubmit={this.handleSubmit}>
          <InputBox>
            <Collapse title="????????????" key="Topic" open="true">
              <InputItem>
                <label htmlFor="title">??????</label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  placeholder="Title"
                />
              </InputItem>
              <InputItem>
                <label htmlFor="subTitle">?????????</label>
                <input
                  id="subTitle"
                  type="text"
                  name="subTitle"
                  value={this.state.subtitle}
                  onChange={this.handleChange}
                  placeholder="Sub-title"
                />
              </InputItem>
            </Collapse>
            <Collapse title="???????????????" key="Speaker & Host">
              <InputItem>
                <label htmlFor="speaker">?????????</label>
                <Grid2_3>
                  <input
                    type="text"
                    name="speakerName1"
                    value={this.state.speakerName1}
                    onChange={this.handleChange}
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    name="speakerInfo1"
                    value={this.state.speakerInfo1}
                    onChange={this.handleChange}
                    placeholder="Info"
                  />
                </Grid2_3>
              </InputItem>
              <InputItem>
                <label htmlFor="speaker">?????????</label>
                <Grid2_3>
                  <input
                    type="text"
                    name="speakerName2"
                    value={this.state.speakerName2}
                    onChange={this.handleChange}
                    placeholder="Name (Optional)"
                  />
                  <input
                    type="text"
                    name="speakerInfo2"
                    value={this.state.speakerInfo2}
                    onChange={this.handleChange}
                    placeholder="Info (Optional)"
                  />
                </Grid2_3>
              </InputItem>
              <InputItem>
                <label htmlFor="host">??????</label>
                <Grid2_3>
                  <input
                    type="text"
                    name="hostName"
                    value={this.state.hostName}
                    onChange={this.handleChange}
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    name="hostInfo"
                    value={this.state.hostInfo}
                    onChange={this.handleChange}
                    aria-label="Host Info"
                    placeholder="Info"
                  />
                </Grid2_3>
              </InputItem>
            </Collapse>
            <Collapse title="?????????" key="Commentator">
              <InputItem>
                <label htmlFor="Commentator">?????????</label>
                <Grid2_3>
                  <input
                    type="text"
                    name="commentatorName"
                    value={this.state.commentatorName}
                    onChange={this.handleChange}
                    placeholder="Name (Optional)"
                  />
                  <input
                    type="text"
                    name="commentatorInfo"
                    value={this.state.commentatorInfo}
                    onChange={this.handleChange}
                    aria-label="Commentator Info"
                    placeholder="Info (Optional)"
                  />
                </Grid2_3>
              </InputItem>
            </Collapse>
            <Collapse title="??????" key="About">
              <InputItem>
                <label htmlFor="abtTalk">????????????</label>
                <textarea
                  type="text"
                  name="abtTalk"
                  value={this.state.abtTalk}
                  onChange={this.handleChange}
                  maxLength={lang === true ? '750' : '360'}
                  placeholder={
                    lang === true
                      ? 'Desciption about the talk (Optional). Max 750 characters'
                      : '????????????????????????????????? 360 ??????'
                  }
                />
              </InputItem>
              <InputItem>
                <label htmlFor="abtSpeaker">????????????</label>
                <textarea
                  type="text"
                  name="abtSpeaker"
                  value={this.state.abtSpeaker}
                  onChange={this.handleChange}
                  maxLength={lang === true ? '750' : '360'}
                  placeholder={
                    lang === true
                      ? 'Desciption about the speaker (Optional). Max 750 characters'
                      : '????????????????????????????????? 360 ??????'
                  }
                />
              </InputItem>
            </Collapse>
            <Collapse
              title="???????????????"
              key="Time & Place"
              overflowWhenOpen="visible"
            >
              <InputItem>
                <label htmlFor="time">??????</label>
                <Grid2_3>
                  <Calendar parentCallback={this.handleCallback} />
                  <InputItem>
                    <label htmlFor="place">??????</label>
                    <Select
                      styles={customStyles}
                      value={selectedPlace}
                      onChange={this.selectPlaceChange}
                      options={placeList}
                    />
                  </InputItem>
                </Grid2_3>
              </InputItem>
            </Collapse>
            <Collapse title="????????????" key="Organizer">
              <InputItem>
                <label htmlFor="Org">????????????</label>
                <input
                  type="text"
                  name="organizer"
                  value={this.state.organizer}
                  onChange={this.handleChange}
                  placeholder="Organizer"
                />
              </InputItem>
              <InputItem>
                <label htmlFor="coOrg">????????????</label>
                <input
                  type="text"
                  name="coOrganizer"
                  value={this.state.coOrganizer}
                  onChange={this.handleChange}
                  placeholder="Co-organizer (Optional)"
                />
              </InputItem>
            </Collapse>
            <Collapse title="??????????????? QR Code" key="Other">
              <InputItem>
                <label htmlFor="qr">QR Code</label>
                <Grid2_3>
                  <Select
                    styles={customStyles}
                    value={selectedQR}
                    onChange={this.selectQRChange}
                    options={QRList}
                    placeholder="Type of QR (Optional)"
                  />
                  <input
                    type="url"
                    name="url"
                    value={this.state.url}
                    onChange={this.handleChange}
                    placeholder="Please enter a URL (Optional)"
                  />
                </Grid2_3>
              </InputItem>
              <InputItem>
                <label htmlFor="book">??????</label>
                <ImgUpload parentCallback={this.coverCallback} />
              </InputItem>
            </Collapse>
            <Collapse title="??????" key="Notes">
              <InputItem>
                <label htmlFor="Notes">?????????</label>
                <input
                  type="text"
                  name="notes1"
                  value={this.state.notes1}
                  onChange={this.handleChange}
                  placeholder="????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
                />
              </InputItem>
              <InputItem>
                <label htmlFor="Notes">?????????</label>
                <input
                  type="text"
                  name="notes2"
                  value={this.state.notes2}
                  onChange={this.handleChange}
                  placeholder="
?????????14???????????????????????????????????????37.5???????????????????????????????????????????????????????????????????????????????????????????????????????????????"
                />
              </InputItem>
              <InputItem>
                <label htmlFor="Notes">?????????</label>
                <input
                  type="text"
                  name="notes3"
                  value={this.state.notes3}
                  onChange={this.handleChange}
                  placeholder="?????????????????????"
                />
              </InputItem>
            </Collapse>
            <Collapse title="????????????" key="lang">
              <InputItemFlex>
                <label>
                  <div>?????????????????????????????????</div>
                  <Toggle
                    id="lang"
                    icons={false}
                    defaultChecked={this.state.lang}
                    onChange={this.handleToggleChange}
                  />
                </label>
              </InputItemFlex>
            </Collapse>
          </InputBox>
          <Button BorderlessLight>
            <input type="submit" value="Preview" />
          </Button>
          <Button BorderlessDark onClick={this.onPrint}>
            Print
          </Button>
        </Form>
        <hr />
        <b>
          <small>Readme</small>
        </b>
        <p>
          <small>
            - ?????????????????????????????????????????????????????????????????????
            <br />- ???????????????Background Graphics????????????
            <br />- ???????????????Margin?????????????????????Header & Footer?????????????????????
            <br />- ????????????????????????Save as PDF?????? A4 ??????
            PDF??????????????????????????? A1 ??? A2 ??????
            <br />
          </small>
        </p>
      </>
    )
  }
}

class Generator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      subTitle: null,
      speakerName1: null,
      speakerInfo1: null,
      speakerName2: null,
      speakerInfo2: null,
      hostName: null,
      hostInfo: null,
      commentatorName: null,
      commentatorInfo: null,
      abtTalk: null,
      abtSpeaker: null,
      date: null,
      time: null,
      organizer: null,
      coOrganizer: null,
      url: null,
      pictures: null,
      selectedPlace: null,
      selectedQR: null,
      notes1: null,
      notes2: null,
      notes3: null,
      lang: false,
    }
  }

  handleCallback = childData => {
    this.setState({
      title: childData.title,
      subTitle: childData.subTitle,
      speakerName1: childData.speakerName1,
      speakerInfo1: childData.speakerInfo1,
      speakerName2: childData.speakerName2,
      speakerInfo2: childData.speakerInfo2,
      hostName: childData.hostName,
      hostInfo: childData.hostInfo,
      commentatorName: childData.commentatorName,
      commentatorInfo: childData.commentatorInfo,
      abtTalk: childData.abtTalk,
      abtSpeaker: childData.abtSpeaker,
      date: childData.date,
      time: childData.time,
      selectedPlace: childData.selectedPlace,
      selectedQR: childData.selectedQR,
      organizer: childData.organizer,
      coOrganizer: childData.coOrganizer,
      url: childData.url,
      pictures: childData.pictures,
      notes1: childData.notes1,
      notes2: childData.notes2,
      notes3: childData.notes3,
      lang: childData.lang,
    })
  }

  render() {
    return (
      <Grid>
        <Input>
          <Info parentCallback={this.handleCallback} />
        </Input>
        <Output>
          <LifeView data={this.state} />
        </Output>
      </Grid>
    )
  }
}

const LifeView = ({ data }) => (
  <LifeViewBox>
    <Poster
      title={data.title}
      subTitle={data.subTitle}
      speakerName1={data.speakerName1}
      speakerInfo1={data.speakerInfo1}
      speakerName2={data.speakerName2}
      speakerInfo2={data.speakerInfo2}
      hostName={data.hostName}
      hostInfo={data.hostInfo}
      commentatorName={data.commentatorName}
      commentatorInfo={data.commentatorInfo}
      abtTalk={data.abtTalk}
      abtSpeaker={data.abtSpeaker}
      date={data.date}
      time={data.time}
      selectedPlace={data.selectedPlace}
      selectedQR={data.selectedQR}
      organizer={data.organizer}
      coOrganizer={data.coOrganizer}
      url={data.url}
      pictures={data.pictures}
      notes1={data.notes1}
      notes2={data.notes2}
      notes3={data.notes3}
      lang={data.lang}
    />
  </LifeViewBox>
)

export default Generator
