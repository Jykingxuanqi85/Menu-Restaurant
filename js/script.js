function tampilkanSemuaMenu(){

    $.getJSON('data/menu.json', function (data) {
        let menu = data.menu;
        menu.sort(function(a, b){
                return sortalphabet(a.nama, b.nama);
                return a.harga - b.harga;
        });
        $.each(menu, function (i, data) {
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/picture/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#"  class="btn btn-primary" >Favorit</a></div></div></div></div>');
        })
    });
}

tampilkanSemuaMenu();

$('.nav-item').on('click', function (){
    $('.nav-item').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All Menu') {
        tampilkanSemuaMenu();
        return;
    }

    $.getJSON('data/menu.json', function (data){
        let menu = data.menu;
        let content = '';
        menu.sort(function(a, b){
            return sortalphabet(a.nama, b.nama);
            return a.harga - b.harga;
        });

        $.each(menu, function (i, data){
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/picture/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Favorit</a></div></div></div></div>'
            }
        });

        $('#daftar-menu').html(content);
    });

});


$('#sortaz').on('click', function (){

    let kategori = $(this).html();
    $('button').html('SORT A-Z');

    // if (kategori == 'All Menu') {
    //     tampilkanSemuaMenu();
    //     return;
    // }

    $.getJSON('../data/menu.json', function (data){
        let menu = data.menu;
        let content = '';
        menu.sort(function(a, b){
            return sortalphabet(a.nama, b.nama);
            // return a.harga - b.harga;
        });

        $.each(menu, function (i, data){
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="../assets/food/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title"> '+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
            } else {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="../assets/food/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title"> '+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
            }
        });
        $('#daftar-menu').html(content);
    });

});


$('#sortza').on('click', function (){

    let kategori = $(this).html();
    // $('h1').html(kategori);
    $('button').html('SORT Z-A');

    // if (kategori == 'All Menu') {
    //     tampilkanSemuaMenu();
    //     return;
    // }

    $.getJSON('../data/menu.json', function (data){
        let menu = data.menu;
        let content = '';
        menu.sort(function(a, b){
            return sortalphabetmundur(b.nama, a.nama);
            // return b.harga - a.harga;
        });

        $.each(menu, function (i, data){
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="../assets/food/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title"> '+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
            } else {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="../assets/food/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title"> '+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
            }
        });
        $('#daftar-menu').html(content);
    });

});

function sortalphabet(a, b){
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function sortalphabetmundur(a, b){
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a > b) ? 1 : (a < b) ? -1 : 0;
}

$('.dropdown-menu a').on('click',function(){
    var tempmenu = [];
    var content = "";
    $('button').text($(this).text());
    $('.dropdown-item').removeClass('active');
    $(this).addClass('active');
    var category = $("h1").text();
    for (var i = 0; i < menus.length; i ++){
        if (menus[i].category == category){
            tempmenu.push(menus[i]);
        }else if (category == "All Menu"){
            tempmenu.push(menus[i]);
        }
    }
    var sort = $(this).text().toLowerCase();
    if (sort == "nama a-z"){
        tempmenu = tempmenu.sort(SortMenu("asc"));
        $.each(tempmenu, function(z, tempmenus){
            content += '<div class="col-md-4 mb-4"><div class="card"><img src="../assets/food/'+tempmenus.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+tempmenus.name+'</h5><p class="card-text">'+tempmenus.description+'</p><h5 class="card-title">Rp. '+tempmenus.price+'</h5><a href="#" class="btn btn-primary">Order Now !</a></div></div></div>';
        })
    }else if (sort == "nama z-a"){
        tempmenu = tempmenu.sort(SortMenu("desc"));
        $.each(tempmenu, function(z, tempmenus){
            content += '<div class="col-md-4 mb-4"><div class="card"><img src="../assets/food/'+tempmenus.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+tempmenus.name+'</h5><p class="card-text">'+tempmenus.description+'</p><h5 class="card-title">Rp. '+tempmenus.price+'</h5><a href="#" class="btn btn-primary">Order Now !</a></div></div></div>';
        })
    }else if (sort == "harga termurah"){
        tempmenu = tempmenu.sort(SortPrice('asc'));
        $.each(tempmenu, function(z, tempmenus){
            content += '<div class="col-md-4 mb-4"><div class="card"><img src="../assets/food/'+tempmenus.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+tempmenus.name+'</h5><p class="card-text">'+tempmenus.description+'</p><h5 class="card-title">Rp. '+tempmenus.price+'</h5><a href="#" class="btn btn-primary">Order Now !</a></div></div></div>';
        })
    }else if (sort == "harga termahal"){
        tempmenu = tempmenu.sort(SortPrice("desc"));
        $.each(tempmenu, function(z, tempmenus){
            content += '<div class="col-md-4 mb-4"><div class="card"><img src="../assets/food/'+tempmenus.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+tempmenus.name+'</h5><p class="card-text">'+tempmenus.description+'</p><h5 class="card-title">Rp. '+tempmenus.price+'</h5><a href="#" class="btn btn-primary">Order Now !</a></div></div></div>';
        })
    }
    $('#menu-list').html(content);
});