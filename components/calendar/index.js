import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import theme from '../../styles/theme'
import { Grid2_3 } from '../../styles/global'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/src/style.css'

const timeList = [
  { value: '12:30', label: '12:30' },
  { value: '13:00', label: '13:00' },
  { value: '13:30', label: '13:30' },
  { value: '14:00', label: '14:00' },
  { value: '14:30', label: '14:30' },
]
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: '0',
    borderRadius: '0',
    background: '#fff',
    borderLeft: '1px solid #ddd',
    color: '#000',
  }),
  menu: (provided, state) => ({
    border: '0',
    background: '#fff',
    borderLeft: '1px solid #ddd',
    color: '#000',
  }),
}

export default class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDay: null,
      selectedTime: null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleDayClick = this.handleDayClick.bind(this)
  }

  handleDayClick = async function(day, { selected }) {
    await this.setState({
      selectedDay: selected ? undefined : day,
    })
    await this.props.parentCallback(this.state)
  }

  handleChange = async function(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    await this.setState({
      [name]: value,
    })
    await this.props.parentCallback(this.state)
    event.preventDefault()
  }

  selectChangeTime = selectedTime => {
    this.setState({ selectedTime })
    console.log({ selectedTime })
  }

  render() {
    const { selectedTime } = this.state
    return (
      <InputItem>
        <input
          type="text"
          name="date"
          value={
            this.state.selectedDay
              ? this.state.selectedDay.toLocaleDateString()
              : 'Please select a day'
          }
        />
        <DayPicker
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
        />
        {this.props.time === 'false' ? (
          <></>
        ) : (
          <Grid2_3>
            Start at
            <Select
              styles={customStyles}
              value={selectedTime}
              onChange={this.selectChangeTime}
              options={timeList}
            />
          </Grid2_3>
        )}
      </InputItem>
    )
  }
}

const InputItem = styled.div`
  position: relative;
  background: ${theme.color.white};
  max-width: 300px;
  ${Grid2_3} {
    background: ${theme.color.grayscale.S100};
    padding-left: 20px;
    border-top: 1px solid ${theme.color.grayscale.S300} !important;
    border-bottom: 1px solid ${theme.color.grayscale.S500} !important;
    align-items: center;
  }
  select {
    height: 30px;
  }
  input {
    border-bottom: 1px solid ${theme.color.grayscale.S500};
    ${theme.fontSize.sm};
    color: ${theme.color.grayscale.S1000};
    padding: 0 10px;
    ::placeholder {
      ${theme.fontSize.sm};
    }
    height: 30px;
  }
  input:focus {
    border-bottom: 1px solid ${theme.color.primary.S400};
  }
  .DayPicker-Caption {
    ${theme.fontSize.sm};
  }
  .DayPicker-Weekdays,
  .DayPicker-Body {
    ${theme.fontSize.xs};
  }
`
