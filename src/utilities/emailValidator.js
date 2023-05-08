export default function emailValidator(email){
    let atSignIndex = null,
        atSignCount = 0;
    for (let i=0; i<email.length; i++){
        if (email[i] === '@'){
            atSignIndex = i; 
            atSignCount++;
        }
    }
    if (!atSignIndex || atSignCount != 1) return false; // not a valid email
    let dotSignIndex = null,
        dotSignCount = 0;
    for (let i=atSignIndex; i<email.length; i++){
        if (email[i] === '.'){
            dotSignIndex = i;
            dotSignCount++;
        }
    }
    if (!dotSignIndex || atSignCount != 1) return false; // not a valid email
    if (dotSignIndex != null){
        if (dotSignIndex === email.length-1) return false; // not a valid email
        if (dotSignIndex - atSignIndex < 2) return false; // not a valid email
    }
    return true;
}

