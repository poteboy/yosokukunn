import React, { useCallback, useState } from 'react';
import { Header } from '../../home/header/header';
import { Footer } from '../../home/footer/footer';
import { path } from '../../config/path';
import Link from 'next/link';

  
export default function Exercise() {
    return (
        <React.Fragment>
            <Header />
            Exercise works
            <Footer />
        </React.Fragment>
    )
}