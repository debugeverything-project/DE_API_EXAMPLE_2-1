<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

   <!-- Scritps necessary for Mindbody -->
   <script>
      $(document).ready(function () {
         // Add the calendar in the appointment page
         $("#my_appointment_calendar").html(`<healcode-widget data-type="appointments" data-widget-partner="object" data-widget-id="6789376fd04" data-widget-version="0"></healcode-widget>`);
      });
   </script>
</head>

<body>

</body>

</html>