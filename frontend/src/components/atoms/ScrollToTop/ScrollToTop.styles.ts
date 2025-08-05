import styled from 'styled-components'

export const ScrollToTopButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1000;

  .ant-btn {
    background-color: #4a4a4a;
    border-color: #4a4a4a;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;

    &:hover {
      background-color: #5a5a5a !important;
      border-color: #5a5a5a !important;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }
  }
`
