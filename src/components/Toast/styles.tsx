import { styled } from 'styled-components';
import { toastInLeft, toastInRight } from '../../styles/animations';

type ToastContainerProps = {
  type: string;
};

const getToastColor = (type: string) => {
  switch (type) {
    case 'info':
      return 'rgb(7, 114, 228)';
    case 'success':
      return '#5cb85c';
    case 'warning':
      return '#f0ad4e';
    case 'danger':
      return '#d9534f';
    default:
      return 'rgb(7, 114, 228)';
  }
};

export const ToastContainer = styled.div<ToastContainerProps>`
  display: flex;
  background-color: ${({ type }) => getToastColor(type)};
  transition: 0.3s ease;
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  margin: 0 0 6px;
  padding: 20px;
  width: 300px;
  border-radius: 3px;

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

export const Image = styled.img`
  width: 20px;
  height: 20px;
`;

export const CloseButton = styled.button`
  margin-left: auto;
  background: none;
  color: #fff;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const ToastText = styled.p`
  margin-left: 16px;
  color: #fff;
`;
