# stephanelefevre_6_28092020

frontend can be downloaded at address :  
https://github.com/OpenClassrooms-Student-Center/dwj-projet6  
run npm install  
run npm start  

for backend, clone this repository  
add separate .env file in main directory  
run npm install  
run npm start  
server is watching on port number 3000 if available

To delete an user using postman,  
use route http://localhost:3000/api/auth/signout  
use bearer token in 'authentification' tab (without "bearer" word, uniquely token)  
and { "email": "email_to_delete" } in body tab (as json data)
