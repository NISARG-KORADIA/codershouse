This was my first MERN project with WebRTC.

## What is the project?
This is a web implementation of the clubhouse app.

Authenticate your self with OTP verification, if you are new user enter your name and photo. You'll be given a token for authorization.

There will be list of room available and also you can create your own room.

Connect in any room and now you'll be able to talk with other's through peer to peer connection. You can mute/unmute yourself.

On leave you'll disconnect from peer. 

On logout token's will be removed from database and your browser.


## How to run the project?
1. Make sure you have react and node installed.
2. Run npm -i to install dependencies in your backend and frontend folder individually.
3. Create a database in Mongodb and add that in your .env file of backend folder and all the necessary details.
4. Create account on twilio and add SID, AUTH and Phone number provided by twilio in your account.
5. Enter the server url in frontend .env file and now you are good to go.
6. on entering your phone number your otp will show in console. (You can uncomment the twilio part of the code to get otp on your phone).
7. Enter the otp and other details and now you are on dashboard with the list of rooms.
8. Join/create room and chat with other members.

