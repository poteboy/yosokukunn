export enum ExerciseNames {
    PowerLifting  = 0,
}

export const exerciseNames: {[key: number] : string} = {
    [ExerciseNames.PowerLifting]: `パワーリフティング`
}

export const exerciseNamesEn: {[key: number] : string} = {
    [ExerciseNames.PowerLifting]: `PowerLifting`
}

export type Exercise = {
    __typename?: 'Exercise';
    name_ja: String;
    name_en: String;
}