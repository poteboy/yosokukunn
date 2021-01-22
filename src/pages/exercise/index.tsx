import React, { useCallback, useState, FC } from 'react';
import { Header } from '../../home/header/header';
import { Footer } from '../../home/footer/footer';
import { path } from '../../config/path';
import Link from 'next/link';
import { exerciseNames, ExerciseNames, Exercise } from '../../model/exercise';
import { parseJsonText } from 'typescript';

  
export default function Exercises() {
    const exercises = []
    return (
        <React.Fragment>
            <Header />
            <Link passHref {...path.exerciseDetail({ exerciseName: 'powerlifting'})}>
                <a>{exerciseNames[0]}</a>
            </Link>
            <Footer />
        </React.Fragment>
    )
}

const exerciseItems: FC<{ exercise : Exercise}> = ({exercise}) => {
    return (
        <React.Fragment>

        </React.Fragment>
    )
}