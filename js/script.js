function luas() {
    var alas = document.getElementById("alas-input").value;
    var tinggi = document.getElementById("tinggi-input").value;
    luas = 0.5*alas*tinggi;
    document.getElementById("luas").innerHTML = luas;
}

function luas1(){
    var alas = document.getElementById("alas-input").value;
    var tinggi = document.getElementById("tinggi-input").value;
    document.getElementById("luas1").innerHTML = "Luas = 1/2 x Alas x Tinggi";
}    

function keliling() {
    var s1 = +document.getElementById("s1").value;
    var s2 = +document.getElementById("s2").value;
    var s3 = +document.getElementById("s3").value;
    keliling = s1+s2+s3;
    document.getElementById("keliling").innerHTML = keliling;
}

function keliling1(){
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var s3 = document.getElementById("s3").value;
    document.getElementById("keliling1").innerHTML = "Keliling = S1 + S2 + S3";
}    