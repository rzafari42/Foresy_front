

export const GetAvailableYears = (numYears: number): number[] => {
    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    
    for (let i = 0; i < numYears; i++) {
        years.push(currentYear - i);
    }
    return years;
}