import React, { useCallback, useState } from 'react';
import { Header } from '../home/header/header';
import { Footer } from '../home/footer/footer';
  
export default function Home() {
    return (
        <React.Fragment>
            <div>Hello world</div>
            <Header />
            <Footer />
        </React.Fragment>
    )
}