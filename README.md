# Assignment-3_Pasword_Generator
JS pasward generator
===

This program created mainly in JS propmps the user to enter their length of password between 8-128 characters long.

I used a promped to get input from the user. Then took that information and passed it to a if statement that checked if it was the proper lenght and alerted the user if it was not.

the function generatePassword()
is then used to ask user for use of upper, lower, and special characters when generating their passward.
this then concatinates the corrisponding arrays to a variable named charList.

I then use charList with the following to create an array of the final passward.

I then use .join to create the string from the array pw_char that contains my passward array and rename it with finalPW which is returned from the main function.

This is then used to dispaly with use of passwardText.