function transform(degree) {
    const CELSIUS = degree.toUpperCase().includes('C');
    const FAHRENHEIT = degree.toUpperCase().includes('F');

    // fluxo de erro
    if (!CELSIUS && !FAHRENHEIT) {
        throw new Error("Don't exist value!")
    };

    // fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (FAHRENHEIT) => (FAHRENHEIT - 32) * 5/9;
    let degreeSign = 'C';

    // fluxo alternativo, C -> F
    if (CELSIUS) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (CELSIUS) => (CELSIUS * 9/5) + 32;
        degreeSign = 'F';
    };

    return formula(updatedDegree) +  " " + degreeSign + "°";
} 

try {
   console.log(transform('11C'));
} catch (error) {
    console.log(error.message);    
}