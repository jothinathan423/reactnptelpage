const authenticate=()=>{
    var isValid=true
    
    var ferr=document.getElementById("errfname")
    var lerr=document.getElementById("errlname")
    var cerr=document.getElementById("errcontact")
    var merr=document.getElementById("erremail")
    var serr=document.getElementById("errselectone")
    var semerr=document.getElementById("errsem")
    var yearerr=document.getElementById("erryear")
    var certificateerr=document.getElementById("errcertificate")
    

    var fname=document.forms['signup'].fname.value
    var lname=document.forms['signup'].lname.value
    var mobile=document.forms['signup'].mobile.value
    var mail=document.forms['signup'].mail.value
    var academicvalue=document.forms['signup'].academic.value
    var semestervalue=document.forms['signup'].semester.value
    var yearvalue=document.forms['signup'].year.value
    var certificatevalue=document.forms['signup'].certificate.value
    


 
    try{
        if(fname==""){
            throw "Faculty name shouldn't empty"
        }
        else if(!(/[A-Za-z]/).test(fname)){
            throw "Faculty name invalid"
        }
    }
    catch(message){
        ferr.innerHTML=message
        isValid=false
    }


    try{
        if(lname==""){
            throw "Session shouldn't empty"
        }
        else if(!(/[A-Za-z]/).test(lname)){
            throw "Session name invalid"
        }
    }
    catch(message){
        lerr.innerHTML=message
        isValid=false
    }


    try{
        if(mobile==""){
            throw "Course name shouldn't empty"
        }
        else if(!(/[A-Za-z]/).test(lname)){
            throw "Invalid Course Name"
        }
    }
    catch(message){
        cerr.innerHTML=message
        isValid=false
    }




    try{
        if(mail==""){
            throw "Score shouldn't empty"
        }
        else{
            if(!(mail !== 0 && mail > 0)){
                throw "Invalid Score"
            }
        }
    }
    catch(message){
        merr.innerHTML=message
        isValid=false
    }

    try{
        if(academicvalue==""){
            throw "Academic Year shouldn't empty"
        }
    }
    catch(message){
        serr.innerHTML=message
        isValid=false
    }


    try{
        if(semestervalue==""){
            throw "Semester shouldn't empty"
        }
    }
    catch(message){
        semerr.innerHTML=message
        isValid=false
    }



    try{
        if(yearvalue==""){
            throw " Year shouldn't empty"
        }
    }
    catch(message){
        yearerr.innerHTML=message
        isValid=false
    }



    try{
        if(certificatevalue==""){
            throw "certificate shouldn't empty"
        }
    }
    catch(message){
        certificateerr.innerHTML=message
        isValid=false
    }

    
    return isValid

}


export default authenticate