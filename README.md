# Password Generator Starter Code

## Generates a password based on the settings the user selects.

- What was my montivation?
    My motivation was to learn to use objects in Javascript.
- Why did I build this project?
    Aside from this being an assignment for the UofT SCS coding bootcamp, I was interested in creating a password generator which functions similar to the one that google users to create a random password.
- What problems does it solve?
    I often have trouble creating passwords that are complex. A lot of the passwords I come up with need to be altered after the fact to be more complex and be accepted by whatever program I am creating it for.
- What did I learn?
    I learned how to use the window object to get information from the user. I learned how to verify that the information that was gathered from the user was correct and use a do while loop if the input from the user was not correct. I learned how to select a random character from a string of characters using Math.random().

## Usage
When the websheet opens, you are going to click the "Generate Password" button.
![Generate Password Button](./Develop/assets/images/Starting_Page.png?raw=true "Generate Password Button")
Once you do, a series of prompts and alerts will pop up asking about the specifics you would like in your password:
    - How long would you like your password to be?
        - You can enter an integer between 8 and 128. If you do not enter something that matches that description, you will be asked again until you enter in a correct value.
        ![Password Length Prompt](./Develop/assets/images/PW_Length.png?raw=true "Password Length Promt")
    - Do you want lower case letters in your password?
        - Click "OK" for yes and "Cancel" for no. If you were to somehow enter in a different value, you will be asked again until you enter in a correct value.
        ![Lower Case Text Alert](./Develop/assets/images/LCase_Question.png?raw=true "Lower Case Text Alert")
    - Do you want upper case characters in your password?
        - Click "OK" for yes and "Cancel" for no. If you were to somehow enter in a different value, you will be asked again until you enter in a correct value.
        ![Upper Case Text Alert](./Develop/assets/images/UCase_Question.png?raw=true "Upper Case Text Alert")
    - Do you want numeric values in your password?
        - Click "OK" for yes and "Cancel" for no. If you were to somehow enter in a different value, you will be asked again until you enter in a correct value.
        ![Numeric Case Text Alert](./Develop/assets/images/Numeric_Question.png?raw=true "Numeric Case Text Alert")
    - Do you want special characters in your password?
        - Click "OK" for yes and "Cancel" for no. If you were to somehow enter in a different value, you will be asked again until you enter in a correct value.
        ![Special Case Text Alert](./Develop/assets/images/Special_Question.png?raw=true "Special Case Text Alert")
    - If the answers to all the yes/no questions above are no, you will have to repeat the questions again until you have at least one answer as yes.
