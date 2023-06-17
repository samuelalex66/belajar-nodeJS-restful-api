# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body : 

``` json
{
    "username" : "at8is",
    "password" : "rahasia",
    "name" : "samuel"
} 

```
Response Body Success : 
``` json
{
    "data" : {
        "username" : "at8is",
        "name" : "samuel"
    },
} 

```

Response Body Error : 
``` json 
{
    "errors" : "Username already registered"
}
 ```
## Login User API

Endpoint : POST /api/users/login

Request Body : 

``` json
{
    "username" : "at8is",
    "password" : "rahasia"
}
```
Request Body Success : 

``` json
{
    "data" : {
        "token" : "unique-token"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Username or password wrong"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers : 
- Authorization : token

Request Body :

```json
{
    "name" : "samuel lagi", // optional
    "password" : "new password" //optional
}
```

Response Body Success : 

```json
{
    "data" : {
        "username" : "at8is",
        "name" : "samuel lagi"
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Name length max 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body Success : 
```json
{
    "username" : "at8is",
    "name" : "samuel"
}
```

Response Body Error : 
```json
{
    "errors" : "Unauthorize"
}
```


## Logout User API

Endopint : DELETE /api/users/logout

Headers :
- Authorization : token

Response Body Success :

```json
{
    "data" : "OK"
}
```

Response Body Error :

```json
{
    "errors" : "Unauthorized"
}
```