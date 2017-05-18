function showButton(){
    document.getElementById("botonGuardarLista").style.display = "block";
}

function agregarLista(){
    var texto = document.getElementById("input-text").value;
    
    if(texto == "")
        document.getElementById("botonGuardarLista").style.display = "none";
    else
    {
        var contenedor = document.getElementById("contenedor");

        contenedor.innerHTML +=     `
                                        <div class="lista" style="background-color: #006aa8; margin-top:10px; border-radius:10px; padding: 5px;">
                                                `+texto+`</br>
                                                <div class='tarjeta' style="background-color:#006aa8; width:100px; ">
                                                    <input type="text" style="background-color:transparent; border-color: transparent; color: #ecf0f1;" id="input-text" placeholder="Agregar tarjeta..." onfocus="showButton(this)" onblur="removeButton(this)"/>
                                                    <button type="button" style="display:none;" class="botonGuardarLista" id="botonGuardarTarjeta" onclick="agregarTarjeta()">Guardar</button>
                                                </div>
                                        </div>
                                    `
    }    

}
