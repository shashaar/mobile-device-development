function fToC(fah){
    let fahren = fah;
    let result = (fahren - 32) * 5/9;
    console.log(`${fahren} Fahrenheit = ${result} Celcius`);
};

export{fToC};