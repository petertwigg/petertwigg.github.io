---
layout: page
title: Payment
feature_image: "/images/kyrenia-03-1600.jpg"
feature_text: 
aside: true 
---
<br>
<br>
<br>


<script src="https://www.paypal.com/sdk/js?client-id=sb"></script>
<script>paypal.Buttons().render('body');</script>

<body>
  
  <div id="paypal-button-container"></div>

  <script>
    paypal.Buttons().render('#paypal-button-container');
    // This function displays Smart Payment Buttons on your web page.
  </script>

</body>