/*
    The Object that holds all the actions of our list
    like: Adding a node, Deleting a node or marking one as done
*/
let toDoConfigs = {
    /*
        To add a node you should write your task in the textbox
        then press enter (when the keypressed's which value is 13)
        If that happens, then a new Item is added to our list with
        the written string.
    */
    addNode: function(event) {
        if (event.which === 13) {
            $("ul").append("<li> <span> <i class='fas fa-trash'> </i> </span> " + $(this).val() + "</li>");
            $(this).val("");
        }
    },
    /*
        To check on a node and mark it as done, a class styling was
        written in the style.css file named as "check" that is toggled
        on the clicked (li)
    */

    checkNode: function() {
        $(this).toggleClass("check");
    },

    /*
        To delete a node, a fadeOut animation is applied after
        clicking on the span appended to the clicked (li),
        animation should take (mSec/2) and it will be completely removed
        from the page

        Side Note:
        When span is clicked, the parent tags are triggered so propagation
        is stopped after event is occured
    */

    deleteNode: function(event) {
        $(this).parent().fadeOut(500, () => {
            $(this).parent().remove();
        });
        event.stopPropagation();
    },
    /*
        To hide the input text field, just set the animation of
        "input[type = 'text']" to the Slide toggle to be toggled whenever
        + sign is clicked
    */
    toggleNodesAdder: function() {
        $("input[type = 'text']").slideToggle();
    },

    //To hide the list that is written by the user

    toggleList: function() {
        $("ul").slideToggle();
    },

    //To hide both Text field and List
    toggleAll: function() {
        toDoConfigs.toggleList();
        toDoConfigs.toggleNodesAdder();
    }
};

//Process
$("ul").on("click", "li", toDoConfigs.checkNode); //To check or uncheck the node you clicked
$("ul").on("click", "li span", toDoConfigs.deleteNode); //To delete the node you clicked
$("input[type='text']").keypress(toDoConfigs.addNode); //To add a new Node on the list
$(".fa-plus-circle").on("click", toDoConfigs.toggleNodesAdder); //To hide/unhide the text field
$(".fa-minus-circle").on("click", toDoConfigs.toggleAll); //To hide/Unhide the whole list