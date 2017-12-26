var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var preFlag = "http://www.countryflags.io/";
var postFlag = "/shiny/64.png";

$(function() {
    $('#search').click(searchCountries);
});

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList,
        statusCode: {
            404: function() {
                alert("Not found anything");
            }
        }
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        $('<img>').attr('src', preFlag + item.alpha2Code + postFlag).appendTo($('<li>').text(item.name).appendTo(countriesList));
    });
}