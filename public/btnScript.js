

const btnClick = function( event ) {
    //Prevent default form action from being carried out
    event.preventDefault()

    const json = {"test": "test"}
        body = JSON.stringify( json )
       
    fetch( '/btnClickServer', {
        method:'POST',
        body: body,
        headers:{ 
        "Content-Type":"application/json"
        }
    })
    .then(response => response.json())
    .then(res => {
        document.querySelector("#btn").innerHTML = res
    })  
}  

const sqlQuery = function( event ) {
    //Prevent default form action from being carried out
    event.preventDefault()
    //<script src = "/btnScript.js"></script>
    // onsubmit="return sqlQuery()"
    alert("hello world!")
 
}  



 window.onload = function() {
    const button = document.querySelector( '#btn' )
    button.onclick = btnClick
}