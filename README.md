# AutoMobileProject
In this project I use Angular 7 , bootstrapcss and SASS  for the fontend ,backend application I use .net core 3 ,EF Core and Sql Server as db.

Backend application only one single application that I created ,because user need to run it locally ,It is easy to run single ddl file locally.But within the project I devide in to couple of layers Controller ,Business logic and Service.I also use dependency injection to register sevice and managers.  Here I use the database first approch and AutoMapper I use to convert db class into entity class.

Assumption
 - password pass to the backend application in encrypted way.
 - password saved in the database in encrypted format.

# Getting started

Following step we need to do for the run the application

clone the project
```
git clone https://github.com/darshanadinushal/AutodeskProject.git
```

First Step run backend application locally.

Before run the application following things we need to do.

1.) Create a sql server database autodeskdb ,and run the script file "Tbl_user_script.sql" in root folder.
2.) Go to the autodesk-backend/Autodesk.Application.RestService appsettings.json file and change the db connection. 

```
# change directory to web API folder
$ cd autodesk-backend/Autodesk.Application.RestService

# run web api server
$ dotnet run

# install npm packages
$ npm i

# run web app
$ dotnet run
```


Secound  step run web applicant locally.
Make sure you have the Angular CLI installed globally.
```


cd autodesk-project

# open the command line in inside project folder run the following command
# Install Angular CLI if necessary
npm install -g @angular/cli@latest

# Install dependencies
npm install
# Run application in development
npm start
```
We need to change the backend url  go to the Autodesk_project\autodesk-project\src\app\service\user-sign.service.ts 
change the running backend api url.

Navigate to http://localhost:4200/ in your browser it will redirect to login page.






