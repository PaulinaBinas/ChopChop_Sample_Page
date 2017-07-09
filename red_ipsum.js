function changeBack()
{
    var col_upper = $(".col_txt");
    var col_lower = $(".lower_p");
    var col_lower_middle = $(".lower_p_middle");
    col_upper.html(col_upper.html().replace(/ipsum/, ' <span style="color: black">$&</span>'));
    col_lower.html(col_lower.html().replace(/ipsum/, ' <span style="color: black">$&</span>'));
    col_lower_middle.html(col_lower_middle.html().replace(/ipsum/, ' <span style="color: black">$&</span>'));
}

$("#pushTheButton").click(function() {
    var col_upper = $(".col_txt");
    var col_lower = $(".lower_p");
    var col_lower_middle = $(".lower_p_middle");
    col_upper.html(col_upper.html().replace(/ipsum/, ' <span style="color: red">$&</span>'));
    col_lower.html(col_lower.html().replace(/ipsum/, ' <span style="color: red">$&</span>'));
    col_lower_middle.html(col_lower_middle.html().replace(/ipsum/, ' <span style="color: red">$&</span>'));
    setTimeout(changeBack, 3000);
    return false;
});