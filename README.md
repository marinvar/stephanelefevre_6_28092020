# stephanelefevre_6_28092020

frontend can be downloaded at address :  
https://github.com/OpenClassrooms-Student-Center/dwj-projet6  
run npm install  
run npm start  

for backend, clone this repository  
add .env file received separately in main directory  
you can use the .env_backup file as model  
DB_CONNECT is the database connection string, (i.e. mongodb+srv://USERNAME:PASSWORD@cluster0.mongodb.net/DB_NAME?retryWrites=true&w=majority)  
TOKEN_PASS is a strong passphrase (i.e. 65g45h4j7o8ll31sz14nd1kuj69j45lqg14g36qd7g9ds3sd8gh1fd2) to encode unidirectionnaly the password  
EMAIL_PASS is a strong passphrase (i.e. 65g45h4j7o8ll31sz14nd1kuj69j45lqg14g36qd7g9ds3sd8gh1fd2) to encode bidirectionnaly the email

run npm install  
run npm start  
server is watching on port number 3000 if available

To delete an user using postman,  
use route http://localhost:3000/api/auth/signout  
use bearer token in 'authentification' tab (without "bearer" word, uniquely token)  
and { "email": "email_to_delete" } in body tab (as json data)
