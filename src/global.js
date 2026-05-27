import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before { box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    margin: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Montserrat, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: background 0.35s ease, color 0.35s ease;
    overflow-x: hidden;
  }

  /* Page fade-in on theme switch */
  #root { transition: opacity 0.15s ease; }

  a { color: inherit; }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 7px; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.body}; }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.imageHighlight};
    border-radius: 4px;
    opacity: 0.6;
  }

  /* Selection highlight */
  ::selection {
    background: ${({ theme }) => theme.imageHighlight}44;
    color: ${({ theme }) => theme.text};
  }
`;
