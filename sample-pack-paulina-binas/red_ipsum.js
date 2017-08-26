function changeBack(col_upper, col_lower_left, col_lower_middle, col_lower_right)
{
    //change all ipsum words' color back to black
    col_upper.html(col_upper.html().replace(/ipsum/, ' <span style="color: black">$&</span>'));
    col_lower_left.html(col_lower_left.html().replace(/ipsum/, ' <span style="color: black">$&</span>'));
    col_lower_right.html(col_lower_right.html().replace(/ipsum/, ' <span style="color: black">$&</span>'));
    col_lower_middle.html(col_lower_middle.html().replace(/ipsum/, ' <span style="color: black">$&</span>'));
}

$("#pushTheButton").click(function() {
    var col_upper = $(".col_txt");
    var col_lower_right = $("#lower_p_right");
    var col_lower_left = $("#lower_p_left");
    var col_lower_middle = $("#lower_p_middle");
    //
    col_upper.html(col_upper.html().replace(/ipsum/, ' <span style="color: red">$&</span>'));
    col_lower_left.html(col_lower_left.html().replace(/ipsum/, ' <span style="color: red">$&</span>'));
    col_lower_right.html(col_lower_right.html().replace(/ipsum/, ' <span style="color: red">$&</span>'));
    col_lower_middle.html(col_lower_middle.html().replace(/ipsum/, ' <span style="color: red">$&</span>'));
    //set the delay of executing changeBack to 3s
    setTimeout(function() { changeBack(col_upper, col_lower_left, col_lower_middle, col_lower_right); }, 3000);
    return false;
});