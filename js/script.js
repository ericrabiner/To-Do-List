var inputBox = $("#inputBox");
var toDo = $("#one");
var inProgress = $("#two");
var complete = $("#three");

$(document).on('keypress',function(event) {
    if(event.which == 13) {
        var addNew = $('<div></div>')
        addNew.html(inputBox.val());
        addNew.css({
            color: "black",
            backgroundColor: "crimson"
        });
        addNew.attr("class", "drag");
        addNew.draggable();

        $("#one").append(addNew);
    }
});

toDo.droppable({
    drop: function(event, ui) {
        let currentObj = ui.draggable[0];
        currentObj.style.backgroundColor = "crimson";
    }
});

inProgress.droppable({
    drop: function(event, ui) {
        let currentObj = ui.draggable[0];
        currentObj.style.backgroundColor = "yellow";
    }
});

complete.droppable({
    drop: function(event, ui) {
        let currentObj = ui.draggable[0];
        currentObj.style.backgroundColor = "lightgreen";
    }
});