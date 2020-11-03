$(document).ready(
    function () {
        // add event handlers
        $("form").submit(submitRank)


        // all functions (program logic)

        function submitRank(event) {
            event.preventDefault();

            var rankMessage = "Hello, ";
            var fullName = $("#firstName").val() + " " + $("#lastName").val()
            var cssColor = ""

            var checkedBoxes = $("input[name=rank]:checked");

            checkedBoxes.each(function () {
                //add rank and color
                rankMessage += $(this).data("abv");
                cssColor += $(this).data("color")


            });


            // put total onscreen
            $(".greeting").css("color", cssColor).text(rankMessage + " " + fullName)



        }


    }
);