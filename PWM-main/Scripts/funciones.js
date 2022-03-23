

function login() {
    var mail = document.getElementById("usermail").value;
    var contrasea = document.getElementById("userpassword").value;
    $.getJSON("http://localhost:3000/usuarios",function(json) {
        $.each(json, function(i) {
            if(json[i].email==mail && json[i].password==contrasea) {
                if(json[i].type=="admin" || json[i].type=="ong") {
                    window.location.replace("MainPage_Admin.html");
                    return true;
                } else {
                    window.location.replace("MainPage.html");
                    return true;
                }
            }
        });
        return false;
    });
    return false;
}

function addAnimal() {
    $.getJSON("http://localhost:3000/animales",function(json) {
        var id = json[0].id;
        $.each(json, function(i) {
            if(json[i]>id) {
                id = json[i].id;
            }
        });
        id++;
        var nombre = document.getElementById("animalname").value;
        var descripcion = document.getElementById("animaldescription").value;
        var tipo = document.getElementById("tipe").value;

        $.ajax( {
            type : "POST",
            url: "http://localhost:3000/animales",
            data: { "id": ""+id+"",
                "idcreador": "1",
                "name":	""+nombre+"",
                "description": ""+descripcion+"",
                "type": ""+tipo+"",
                "race":	"",
                "location":	"",
                "images":	"Imagenes/defecto.jpg"},
            success: function(datos) {
                window.location.replace("nuestrosAnimales.html");
                return true;
            },
            error: function(datos) {
                return false;
            }
        });
        return false;
    });
return false;

}