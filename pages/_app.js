import App from 'next/app';
import React from 'react';
import { ThemeProvider } from "styled-components";


class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme = {{color: 'white', background: 'black'}}>
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }
}

export default MyApp;