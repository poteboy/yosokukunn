import React, { useCallback, useState } from 'react';
import { Header } from '../home/header/header';
import { Footer } from '../home/footer/footer';
import { path } from '../config/path';
import Link from 'next/link';

  
export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <Link passHref {...path.exercise}>
                <a>exercise</a>
            </Link>
            <Footer />
        </React.Fragment>
    )
}