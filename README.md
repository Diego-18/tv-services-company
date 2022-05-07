# tv-services-company

This is an api-rest whose objective is to generate a control of service orders, where customers generate a ticket and then be managed by a technician.

### Install

1 - Create a database in postgres with the name Services-TV.

2 - The repository is downloaded.

3 - The following command is executed:
```
npm install
```
command to install the dependencies.

4 - To compile the project, the following command is executed 
```
npm build
```
5 - To start the project, the following command is executed 
```
npm start
```

6 - To access the data we place the following addresses in our browser.

## Functionality

Here you can find information about how the api works and which are the required fields for its operation.

To visualize the api operation it is necessary to use postman, thunder Client or any tool to make requests.

![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

### Services Collections
```
GET     http://localhost:5000/services                    //Bring all records

POST    http://localhost:5000/services                    // Create new records

PUT     http://localhost:5000/services/{id}               // Update record existing

PUT     http://localhost:5000/services-act/{id}           // Activated record existing

PUT     http://localhost:5000/services-deact/{id}         // Desactived record existing

DELETE  http://localhost:5000/services/{id}               // Delete record existing
```

In order to manage the **services** we need to send you the following **params**:


~~~
{
    "name": "example" (string - required)
}
~~~


### Technicals Collections
```
GET     http://localhost:5000/technicals             //Bring all records

POST    http://localhost:5000/technicals              // Create new records

PUT     http://localhost:5000/technicals/{id}         // Update record existing

PUT     http://localhost:5000/technicals-act/{id}           // Activated record existing

PUT     http://localhost:5000/technicals-deact/{id}         // Desactived record existing

DELETE  http://localhost:5000/technicals/{id}         // Delete record existing
```

In order to manage the **technicians** we need to send you the following **params**:

~~~
{
    "firstName": "example"          (string - required)
    "lastName": "example"           (string - required)
    "email": "example@example.com"  (string - opcional)
    "phone": "+57 123456789"        (string - opcional)
    "yearsService": 1               (int - required)
    "outsourcing": true             (boolean - required)
}
~~~



### Clients Collections
```
GET     http://localhost:5000/clients             //Bring all records

POST    http://localhost:5000/clients              // Create new records

PUT     http://localhost:5000/clients/{id}         // Update record existing

PUT     http://localhost:5000/clients-act/{id}           // Activated record existing

PUT     http://localhost:5000/clients-deact/{id}         // Desactived record existing

DELETE  http://localhost:5000/clients/{id}         // Delete record existing
```

In order to manage the **clients** we need to send you the following **params**:

~~~
{
    "firstName": "example"          (string - required)
    "lastName": "example"           (string - required)
    "email": "example@example.com"  (string - opcional)
    "phone": "+57 123456789"        (string - opcional)
}
~~~

### Tickets Collections
```
GET     http://localhost:5000/tickets             //Bring all records

POST    http://localhost:5000/tickets              // Create new records

PUT     http://localhost:5000/tickets/{id}         // Update record existing

DELETE  http://localhost:5000/tickets/{id}         // Delete record existing
```
In order to manage the **ticket** we need to send you the following **params**:

~~~
{
    "client": 1                     (int - required)
    "service": 1                    (int - required)
    "description": "example"        (string - required)
}
~~~


## Technologies used

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## Browsers support

![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white)
![Opera](https://img.shields.io/badge/Opera-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white)
