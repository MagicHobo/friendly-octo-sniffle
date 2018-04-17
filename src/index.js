// Wait until the DOM is loaded and ready
$(document).ready(function() {
    //Function that defines the "Exercise" object.
    class Exercise {
        constructor(name, recovery, lastDate) {
            this.name = name;
            this.recovery = recovery;
            this.lastDate = lastDate;
        }
    }

    // A jQuery reference to the exercise list
    var exerciseList = $("#exercise-list");

    // A jQuery reference to the add exercise form
    var addExerciseForm = $("#add-form");

    // A helper function to add an individual exercise from the list
    function addExercise(exercise) {
        // jQuery has a .append() method that attaches a new html element
        exerciseList.append(`<li>
          Name: ${exercise.name}, Recovery: ${exercise.recovery}, Last Date: ${exercise.lastDate.toDateString()}
          <button type="button" class="danger" data-action="delete">X</button>
        </li>`);
    }

    function loadInitialExercises() {
        //Creates an array of exercise objects.
        var exercises = [
            new Exercise("Pullups", 1, new Date(2018, 2, 16)),
            new Exercise("Pushups", 2, new Date(2018, 2, 16)),
            new Exercise("Situps", 1, new Date(2018, 2, 18))
        ];

        for (var exercise of exercises) {
            addExercise(exercise);
        }
    }

    /* Event handlers */
    // Handle add form submit
    addExerciseForm.submit(function(event) {
        // Normally a form submission reloads the page. Cancel that
        event.preventDefault();

        // Get references to the inputs
        var nameInput = addExerciseForm.find("#add-form-name");
        var recoveryInput = addExerciseForm.find("#add-form-recovery");
        var lastDateInput = addExerciseForm.find("#add-form-last-date");

        // Get and parse the values from the inputs
        var nameValue = nameInput.val();
        var recoveryValue = parseInt(recoveryInput.val());
        var lastDateValue = new Date(lastDateInput.val());

        // Create a new Exercise instance
        var exercise = new Exercise(nameValue, recoveryValue, lastDateValue);

        // Add it to the list
        addExercise(exercise);
    });

    // Handle delete click
    exerciseList.on("click", "button[data-action='delete']", function(event) {
        // The clicked item is the button which is inside an <li> tag.
        // jQuery has a .closest() method to get the closes element going UP the DOM tree that matches the selector
        var listItem = $(event.target).closest("li");

        // jQuery has a .remove() method to remove an element from the DOM
        listItem.remove();
    });

    // Initialization Code
    loadInitialExercises();
});
