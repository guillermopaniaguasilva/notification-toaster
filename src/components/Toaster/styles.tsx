import { styled } from 'styled-components';
import { toastInLeft, toastInRight } from '../../styles/animations';

export const ToasterContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* min-width: 100vw;
  z-index: 9999;
  position: fixed;
  bottom: 0px;
  left: 0px;
  margin: 0px;
  padding: 0px; */
  box-sizing: border-box;
  position: fixed;
  z-index: 999999;
  pointer-events: none;

  &.bottom-middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &.top-right {
    top: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: ${toastInRight} 0.7s;
  }

  &.bottom-right {
    bottom: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: ${toastInRight} 0.7s;
  }

  &.top-left {
    top: 12px;
    left: 12px;
    transition: transform 0.6s ease-in;
    animation: ${toastInLeft} 0.7s;
  }

  &.bottom-left {
    bottom: 12px;
    left: 12px;
    transition: transform 0.6s ease-in;
    animation: ${toastInLeft} 0.7s;
  }
`;
