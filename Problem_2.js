//When updating the input, print the number of inputs:
document.getElementById("inNum").addEventListener("change", () => {

    let inNum = document.getElementById("inNum").value;

    //If input decreases, remove the input numbers:
    let remLbl = document.getElementsByClassName("input-label");
    let remInp = document.getElementsByClassName("input-value");
    let remBtn = document.getElementsByClassName("submit-button");
    let remBr = document.getElementsByClassName("line-break");
    let remRes = document.getElementsByClassName("output-results");

    //Remove the last label:
    while(remLbl[0]) {
        document.body.removeChild(remLbl[0]);
    }

    //Remove the line break:
    while(remBr[0]) {
        document.body.removeChild(remBr[0]);
    }

    //Remove the last input:
    while(remInp[0]) {
        document.body.removeChild(remInp[0]);
    }

    //Remove the submit button:
    while(remBtn[0]) {
        document.body.removeChild(remBtn[0]);
    }
    
    //Remove the results:
    while(remRes[0]) {
        document.body.removeChild(remRes[0]);
    }

    //Print a field for the value of the input:
    for (let i = 0; i < inNum; i++) {

        let inVId = "inVal" + (i + 1);

        //Print label:
        let inLbl = document.createElement("P");
        inLbl.classList.add("input-label");
        inLbl.innerHTML = "Enter Value " + (i + 1) + ":";
        document.body.appendChild(inLbl);
    
        //Print input with unique ID:
        let inVal = document.createElement("INPUT");
        inVal.setAttribute("id", inVId);
        inVal.setAttribute("type", "number");
        inVal.classList.add("input-value");
        document.body.appendChild(inVal);
    }

    //Add line break and submit button, each time the value changes:
    let lineBr = document.createElement("br");
    lineBr.classList.add("line-break");
    document.body.appendChild(lineBr);

    let crBtn = document.createElement("BUTTON");
    crBtn.classList.add("submit-button");
    crBtn.setAttribute("onclick", "output()");
    crBtn.innerHTML = "Submit"
    document.body.appendChild(crBtn);
});

//When submit button is clicked, print the resulting amounts:
function output() {

    //Get value of main input:
    let inNum = document.getElementById("inNum").value;
    let iEven = 0;
    let iOdd = 0;

    for (i = 0; i < inNum; i++) {
        let numID = "inVal" + (i + 1);
        let vNum = document.getElementById(numID).value;

        //Count even and odd numbers:
        if (vNum % 2 == 0) {
            iEven++;
        }
        else {
            iOdd++;
        }
    }

    //Print the Results:
    let sEven = "The number of even numbers in the series = " + iEven + ".";
    let sOdd = "The number of odd numbers in the series = " + iOdd + ".";
    
    let pOdd = document.createElement("P");
    pOdd.classList.add("output-results");
    pOdd.innerHTML = sOdd;
    document.body.appendChild(pOdd);
    
    let pEven = document.createElement("P");
    pEven.classList.add("output-results");
    pEven.innerHTML = sEven;
    document.body.appendChild(pEven)
}