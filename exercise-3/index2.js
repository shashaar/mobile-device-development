function BMI(berat, tinggi){
    let b = berat;
    let t = tinggi;
    let result = b / (t*t);
    console.log(`BMI Anda = ${result}`);
    if(result < 18.5){
        console.log("Berat anda kurang");
    }else if(result >= 18 && result <= 24){
        console.log("Berat anda Normal");
    }else if(result >= 25 && result <= 29){
        console.log("Berat anda Berlebih");
    }else if(result >= 30 && result <= 35){
        console.log("Anda Obesitas");
    }
}

export default BMI;