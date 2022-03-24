
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
                $(".gallery").empty();
                $.each(data, function(i) {
                    var divcode= '<figure class="notification_photo">\
                                        <a href="eleccionAnimal.html?id='+data[i].id+'"><img src="'+data[i].images+'"></a>\
                                        <figcaption>'+data[i].name+'</figcaption>\
                                    </figure>';
                    $(".gallery").append(divcode);
                });
            break;

            case "perros.html":
                data = json.animales;
                $(".gallery").empty();
                $.each(data, function(i) {
                    if(data[i].type=="perro") {
                        var divcode= '<figure class="notification_photo">\
                                        <a href="eleccionAnimal.html?id='+data[i].id+'"><img src="'+data[i].images+'"></a>\
                                        <figcaption>'+data[i].name+'</figcaption>\
                                    </figure>';
                        $(".gallery").append(divcode);
                    }
                });
            break;

            case "gatos.html":
                data = json.animales;
                $(".gallery").empty();
                $.each(data, function(i) {
                    if(data[i].type=="gato") {
                        var divcode= '<figure class="notification_photo">\
                                        <a href="eleccionAnimal.html?id='+data[i].id+'"><img src="'+data[i].images+'"></a>\
                                        <figcaption>'+data[i].name+'</figcaption>\
                                    </figure>';
                        $(".gallery").append(divcode);
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
                        $(".elec1").text("Sobre " +  data[i].name + ":");
                        $(".aboutanimal").append(data[i].description + "\nSe encuentra en " + data[i].location);
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