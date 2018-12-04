$.ajax({
    type: "GET",
    url: "https://api.saministro.com/companies/177",
    success: info
});


function info(company) {
    console.log(company);
    console.log(company.name);
    console.log(company.url);
    console.log(company.description);
    console.log(company.is_active);
    console.log(company.cover_photo);
    console.log(company.addresses[1]);
    // cover //
    $('#img1').css({
        'background-image': 'url("' + company.cover_photo + '")'
    })

   


    $('#name-id').html('<h1>' + company.name + '</h1>')
    if(company.is_verified == 1) {
        $('.verified-div').css({
            'background-image': 'url("img/Verified1.png")'
        })
    }
    if(company.is_verified == 0) {
        $('.verified-div').css({
            'background-image': 'url("img/Verified0.png")'
        })
    }
    $('#description-id').html('<p>' + company.description + '</p>');
    $('.address-div').html('<p>' + company.addresses[0] + '</p> <p>' + company.addresses[1] + '</p>');
}