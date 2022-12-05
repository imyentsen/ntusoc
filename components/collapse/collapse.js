import React from 'react'
import Collapsible from 'react-collapsible'
import styled from 'styled-components'
import theme from '../../styles/theme'

const Collapse = ({ title, children }) => (
  <Wrapper>
    <Collapsible
      className="faq"
      openedClassName="faq active"
      triggerClassName="faq-title"
      triggerOpenedClassName="faq-title active"
      triggerTagName="button"
      contentInnerClassName="faq-content"
      trigger={title}
      transitionTime={300}
      easing="ease-out"
    >
      {children}
      <SpaceSpan />
    </Collapsible>
  </Wrapper>
)

export default Collapse

const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }

  .faq {
    border-bottom: 1px solid ${theme.color.grayscale.S1000};
  }

  .faq-title {
    ${theme.fontSize.sm};
    color: ${theme.color.grayscale.S1000};
    border: none;
    background: none;
    outline: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    font-weight: bold;
    padding: 12px 72px 12px 0;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border-left: 2px solid ${theme.color.grayscale.S1000};
      border-bottom: 2px solid ${theme.color.grayscale.S1000};
      position: absolute;
      top: 15px;
      right: 24px;
      transform: rotate(-45deg);
      transition: transform 0.3s ease-in-out;
    }

    &.active {
      &::after {
        transform: rotate(135deg);
      }
    }
  }

  .faq-content {
    padding: 0;
    line-height: 26px;
    ${theme.fontSize.sm};
    color: ${theme.color.grayscale.S1000};
  }
`

const SpaceSpan = styled.div`
  height: 15px;
  width: 100%;
`
