# AutodeskProject

# Getting started

Following step we need to do for the run the application


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
git clone https://github.com/darshanadinushal/AutodeskProject.git

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






