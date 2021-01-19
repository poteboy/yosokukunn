export const path = {
    home: {
        href: '/',
        as: undefined,
    },
    exercise: {
        href: '/exercise',
        as: undefined,
    },
    exerciseDetail: ({exerciseName}: {exerciseName: string}) => ({
        href: '/exercise/[exerciseName]',
        as: `/exercise/${exerciseName}`,
    })
} as const;