var tinggiSiswa1 = 177+" cm";
var tinggiSiswa2 = 165+" cm";
var tinggiSiswa3 = 167+" cm";



const tinggiBadanSiswa = () =>{

    if(tinggiSiswa1>tinggiSiswa2){
        if(tinggiSiswa1>tinggiSiswa3){
            if(tinggiSiswa3>tinggiSiswa2){
                console.log("Siswa 1 memiliki badan yang paling tinggi.berikut dengan urutan dari yang tertinggi hingga terpendek");
                console.log("Siswa 1 :"+tinggiSiswa1+"\n"+"Siswa 3 :"+tinggiSiswa3+"\n"+"Siswa 2 :"+tinggiSiswa2);
            }else{
                console.log("Siswa 1 memiliki badan yang paling tinggi.berikut dengan urutan dari yang tertinggi hingga terpendek");
                console.log("Siswa 1 :"+tinggiSiswa1+"\n"+"Siswa 2 :"+tinggiSiswa2+"\n"+"Siswa 3 :"+tinggiSiswa3);
            }           
        }else{
            if(tinggiSiswa3>tinggiSiswa2){
                console.log("Siswa 3 memiliki badan yang paling tinggi.berikut dengan urutan dari yang tertinggi hingga terpendek");
                console.log("Siswa 3 :"+tinggiSiswa3+"\n"+"Siswa 1 :"+tinggiSiswa1+"\n"+"Siswa 2 :"+tinggiSiswa2);
            }else{
                console.log("Siswa 1 memiliki badan yang paling tinggi.berikut dengan urutan dari yang tertinggi hingga terpendek");
                console.log("Siswa 1 :"+tinggiSiswa1+"\n"+"Siswa 2 :"+tinggiSiswa2+"\n"+"Siswa 3 :"+tinggiSiswa3);
            } 
        }
    }else{
        if(tinggiSiswa2>tinggiSiswa3){
            if(tinggiSiswa3>tinggiSiswa1){
                console.log("Siswa 2 memiliki badan yang paling tinggi.berikut dengan urutan dari yang tertinggi hingga terpendek");
                console.log("Siswa 2 :"+tinggiSiswa2+"\n"+"Siswa 3 :"+tinggiSiswa3+"\n"+"Siswa 1 :"+tinggiSiswa1);
            }else{
                console.log("Siswa 2 memiliki badan yang paling tinggi.berikut dengan urutan dari yang tertinggi hingga terpendek");
                console.log("Siswa 2 :"+tinggiSiswa2+"\n"+"Siswa 1 :"+tinggiSiswa1+"\n"+"Siswa 3 :"+tinggiSiswa3);
            }           
        }else{
            if(tinggiSiswa3>tinggiSiswa1){
                console.log("Siswa 3 memiliki badan yang paling tinggi.berikut dengan urutan dari yang tertinggi hingga terpendek");
                console.log("Siswa 3 :"+tinggiSiswa3+"\n"+"Siswa 2 :"+tinggiSiswa2+"\n"+"Siswa 1 :"+tinggiSiswa1);
            }else{
                console.log("Siswa 2 memiliki badan yang paling tinggi.berikut dengan urutan dari yang tertinggi hingga terpendek");
                console.log("Siswa 2 :"+tinggiSiswa2+"\n"+"Siswa 1 :"+tinggiSiswa1+"\n"+"Siswa 3 :"+tinggiSiswa3);
            }
        }

    }
}

tinggiBadanSiswa();