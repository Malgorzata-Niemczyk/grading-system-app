interface gradesList {
    id: string,
    minPercentage: number,
    maxPercentage: number,
    symbolicGrade: string
}

export const GRADES: gradesList[] = [
    {id: "1", minPercentage: 0, maxPercentage: 24, symbolicGrade: "Unsatisfactory"},
    {id: "2", minPercentage: 25, maxPercentage: 49, symbolicGrade: "Satisfactory"},
    {id: "3", minPercentage: 50, maxPercentage: 74, symbolicGrade: "Good"},
    {id: "4", minPercentage: 75, maxPercentage: 99, symbolicGrade: "Very Good"},
]