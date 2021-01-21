import React, { useCallback, useState } from 'react';
import { Header } from '../home/header/header';
import { Footer } from '../home/footer/footer';
import { path } from '../config/path';
import Link from 'next/link';

  
export default function Home() {
    return (
        <React.Fragment>
            <Link passHref {...path.home}>
                <a>To TOP</a>
            </Link>
            <Header />
            <Footer />
        </React.Fragment>
    )
}