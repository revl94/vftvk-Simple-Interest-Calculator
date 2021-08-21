function compute()
{
    p = document.getElementById("principal").value;

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal <= 0) {
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        var interest = principal * years * rate / 100
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerText = interest + " in the year " + year
    }

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        