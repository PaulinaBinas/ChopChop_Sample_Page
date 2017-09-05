let read_more1_clicked = false;
let read_more2_clicked = false;
let read_more3_clicked = false;

$("#read_more1").click(function() {
    let left = $("#lower_p_left");
    if(read_more1_clicked != true)
    {
        left.append("Duis eget elit vitae orci vestibulum vehicula ut id diam. Aenean quis eros quis tortor posuere tempor. Vestibulum commodo orci vitae vestibulum viverra. Duis imperdiet lorem vehicula mi ornare molestie.");
        read_more1_clicked = true;       
    }
    return false;
});

$("#read_more2").click(function() {
    let middle = $("#lower_p_middle");
    if(read_more2_clicked != true)
    {
        middle.append("Aenean malesuada mattis justo, sed efficitur nisl fringilla eget. Integer a mi quis lectus vulputate tempus quis quis dui. Mauris suscipit euismod urna, eget feugiat tellus imperdiet vitae. Vestibulum. Duis eget elit vitae orci vestibulum vehicula ut id diam. Aenean quis eros quis tortor posuere tempor. Vestibulum commodo orci vitae vestibulum viverra. Duis imperdiet lorem vehicula mi ornare molestie.");
        read_more2_clicked = true;
    }
    return false;
});

$("#read_more3").click(function() {
    let right = $("#lower_p_right");
    if(read_more3_clicked != true)
    {
        right.append("Duis eget elit vitae orci vestibulum vehicula ut id diam. Aenean quis eros quis tortor posuere tempor. Vestibulum commodo orci vitae vestibulum viverra. Duis imperdiet lorem vehicula mi ornare molestie.");
        read_more3_clicked = true;
    }
    return false;
});