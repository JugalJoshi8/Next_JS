import App from 'next/app';
import React from 'react';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <h1>Page Heading</h1>
                <Component {...pageProps} />
            </>
        )
    }
}

export default MyApp;