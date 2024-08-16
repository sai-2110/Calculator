
function appendToResult(value){
    document.getElementById('show').value +=value;
}
function clearResult(){
    document.getElementById('show').value='';
}
function DelResult(){
    document.getElementById('show').value='0';
}
function calculate(){
    try{
        const result = eval(document.getElementById('show').value);
        document.getElementById('show').value = result;
    } 
    catch (error){
        document.getElementById('show').value='Error';
    }
}