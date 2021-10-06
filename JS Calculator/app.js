console.log("!Hello Script");

const calcy = () => {
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let phy = document.getElementById('phy').value;
    let comp = document.getElementById('comp').value;
    let grades = "";

    let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(phy) + parseFloat(comp);

    let per = (totalGrades/400) * 100;

    if(per <= 100 && per >= 80){
        grades = 'A';
    }else if(per <= 79 && per >= 60){
        grades = 'B';
    }else if(per <= 59 && per >= 40){
        grades = 'C';
    }else{
        grades = 'F';
    }

    if(per>=39.5){
        document.getElementById('showdata').innerHTML = `Out of 400 your total is ${totalGrades} and Percentage is ${per}%. <br> Your Grade is ${grades}. You are Pass.`
    }
    else{
        document.getElementById('showdata').innerHTML = `Out of 400 your total is ${totalGrades} and Percentage is ${per}%. <br> Your Grade is ${grades}. You are Fail.`
    }

    
}