let task01 = 60
let task02 = 90
let project = true

let ortalama=(task01+task02)/2

if(ortalama<70){
    alert('teesufki alinmadi')
}else{
    if(ortalama>90 && project==true){
        alert('siz qalibsiz')
    }else{
        alert('istirak haqqi qazandiniz')
    }
}