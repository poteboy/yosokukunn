import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import Link from 'next/link'


export const Header: FC = () => {
    return (
        <header>
        </header>   
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