# Address API Spec

## Create Address API

Endpoint : POST /api/contact/:contactId/addresses

Headers : 
- Authorization : token

Request Body :

```json
{
    "street" : "jalan",
    "city" : "kota",
    "province" : "provinsi",
    "country" : "negara",
    "postal_code" : "kode pos"
}
```

Request Body Success :
```json
{
    "data" {
        {
            "id" : 1,
            "street" : "jalan",
            "city" : "kota",
            "province" : "provinsi",
            "country" : "negara",
            "postal_code" : "kode pos"
        }
    }
}

```

Request Body Error :
```json
{
    "errors" : "Country is required"
}
```


## Update Address API

Endpoint : PUT /api/contact/:contactId/addresses/:addressId

Headers : 
- Authorization : token

Request Body :

```json
{
    "street" : "jalan",
    "city" : "kota",
    "province" : "provinsi",
    "country" : "negara",
    "postal_code" : "kode pos"
    
}

```

Request Body Success :

```json
{
    "data" : {
        "id" : 1,
        "street" : "jalan",
        "city" : "kota",
        "province" : "provinsi",
        "country" : "negara",
        "postal_code" : "kode pos"
    }
}
```

Request Body Error :
```json
{
    "errors" : "Country is required"
}
```

## Get Address API

Endpoint : GET /api/contact/:contactId/addresses/:addressId

Headers : 
- Authorization : token


Request Body Success :
```json
{
    "data" : {
        "id" : 1,
        "street" : "jalan",
        "city" : "kota",
        "province" : "provinsi",
        "country" : "negara",
        "postal_code" : "kode pos"
    }
}
```

Request Body Error :

```json
{
    "errors" : "Contact is not found"
}
```

## List Addresses API

Endpoint : GET /api/contact/:contactId/addresses

Headers : 
- Authorization : token


Request Body Success :

```json
{
    "data" : [
        {
            "id" : 1,
             "street" : "jalan",
            "city" : "kota",
            "province" : "provinsi",
            "country" : "negara",
            "postal_code" : "kode pos"
        },
        {
            "id" : 2,
             "street" : "jalan",
            "city" : "kota",
            "province" : "provinsi",
            "country" : "negara",
            "postal_code" : "kode pos"
        }
    ]
}
```

Request Body Error :

```json
{
    "errors" : "Contact is not found"
}

```

## Remove Address API

Endpoint : DELETE /api/contact/:contactId/addresses

Headers : 
- Authorization : token

Request Body Success :
```json
{
    "data" : "OK"
}
```

Request Body Error :

```json
{
    "errors" : "Address is not found"
}
```