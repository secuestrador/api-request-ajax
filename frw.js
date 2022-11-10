let peticion; 

if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");

peticion.addEventListener("load",()=>{
    let respuesta;
    if (peticion.status == 200 || peticion.status == 201){ respuesta = peticion.response}
    else respuesta = "Lo siento, hubo un problema con la información solicitada." 
    console.log(JSON.parse(respuesta));
});

peticion.open("POST","https://reqres.in/api/users");

peticion.setRequestHeader("Content-type", "application/json;charset=UTF8");

peticion.send(JSON.stringify({
    "name": "333",
    "job": "555surnamenigga"
}));
