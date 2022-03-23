
/*Wait for the document to be ready*/
$(document).ready(function(){
    /*--------------------------------------------------------------------------Retrieve data from JSON file-----------------------------------------------------------------------*/
    $.getJSON("data.json",function(json) {
        /*To know what html file is loaded*/
        var path = window.location.pathname;
        var page = path.split("/").pop();
        var data;

        /*Flow control depending of the html document loaded*/
        switch(page) {

            case "perrosygatos.html":

                data = json.animales;
                $(".animales").empty();
                $.each(data, function(i) {
                    var divcode= '<div >\
                                    <img src="' + data[i].images + '" alt="defecto1" className="prueba">\
                                    <a className="prueba3" href="eleccionAnimal.html?id='+ data[i].id +'">'+ data[i].name + '</a>\
                                   </div>';
                    $(".animales").append(divcode);
                });
            break;

            case "perros.html":
                data = json.animales;
                $(".animales").empty();
                $.each(data, function(i) {
                    if(data[i].type=="perro") {
                        var divcode= '<div >\
                                    <img src="' + data[i].images + '" alt="defecto1" className="prueba">\
                                    <a className="prueba3" href="eleccionAnimal.html?id='+ data[i].id +'">'+ data[i].name + '</a>\
                                   </div>';
                        $(".animales").append(divcode);
                    }
                });
            break;

            case "gatos.html":
                data = json.animales;
                $(".animales").empty();
                $.each(data, function(i) {
                    if(data[i].type=="gato") {
                        var divcode= '<div >\
                                    <img src="' + data[i].images + '" alt="defecto1" className="prueba">\
                                    <a className="prueba3" href="eleccionAnimal.html?id='+ data[i].id +'">'+ data[i].name + '</a>\
                                   </div>';
                        $(".animales").append(divcode);
                    }
                });
            break;

            case "eleccionAnimal.html":
                var flag = window.location.href.split("=").pop();

                data = json.animales;
                $.each(data, function(i) {
                    if(data[i].id==flag) {
                        $(".elec").text(data[i].name);
                        $(".eleccion").attr("src", data[i].images);
                        $(".elec1").text("Sobre " +  data[i].name + ": " + data[i].description + " Se encuentra en " + data[i].location);
                    }
                });
            break;

            case "Forum.html":
                data = json.comentarios;
                dataUser = json.usuarios;
                console.log(data);
                $(".forumain").empty();
                $.each(data, function(i) {
                    var id = data[i].idautor;
                    var texto = data[i].texto;
                    $.each(dataUser, function(j) {
                        if(dataUser[j].id == id)
                        var comment = '<div className="textbox">' + dataUser[j].name + ": " + texto + '</div>';
                        $(".forumain").append(comment);
                    });
                });

            break;

            case "":
            break;

        }
    });
});