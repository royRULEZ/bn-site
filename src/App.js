//======================================================================================================================
// App.js: App that is loaded to the DOM
//======================================================================================================================

// Imports - Main
import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';

// Imports - Theme
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import styled from 'styled-components';

// CSS - Main Styles to be applied to the App
const AppStyles = styled.div`
  color: #000;
  font-size: 100%;
  font-weight: 300;
  font-family: ${props => props.theme.font_main};
`;

// Component
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppStyles>
          <Layout />
        </AppStyles>
      </ThemeProvider>
    );
  }
}

export default App;
