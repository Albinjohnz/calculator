//display content in clac Screen
const displayContent = (content)=>{
    calcScreen.value += content
}
//clear all content
const clearAllContent = ()=>{
    calcScreen.value = ""
}
//result display in  calcScreen
const showResult =()=>{
    try{
        console.log("TRY-BLOCK");
        calcScreen.value = eval(calcScreen.value)
    }catch(error){
        console.log("CATCH-BLOCK");
        console.log(error);
        calcScreen.value=""
        calcScreen.placeholder = "Invalid Expression"
    }finally{
        console.log("Finally Block : Task Completed");
    }
    
}