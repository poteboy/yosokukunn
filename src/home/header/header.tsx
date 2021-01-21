import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import Link from 'next/link'
import { path } from '../../config/path';


export const Header: FC = () => {
    return (
    <Link passHref {...path.home}>
        <a>To TOP</a>
    </Link> 
    )
}

// JSX要素用のスタイル定義（React.CSSProperties形式）
const style: React.CSSProperties = {
    color: 'blue',
    background: '#aaccff',
    padding: '0.5em',
    fontWeight: 'bolder',
    borderRadius: '0.5em',
  };