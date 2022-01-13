Feature: Write comments in a page form
    The user can write comments in page
    
    Scenario: Send form without required fields
      Given the user is in the homepage
      When the button "comentar" is pressed without the required fields
      Then those fields should show the message "Este campo es obligatorio"