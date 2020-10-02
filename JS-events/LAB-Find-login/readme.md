*JSON*

```
{
    "myName": "Sergey",
    "mySurname": "Krikun",
    "myMiddleName": "Aleksandrovich",
    "programLanguages": ["javaScript", "Kotlin"]
}
```

Ссылка на JSON

https://kodaktor.ru/myjson_88635

*JSON-schema*

```
{
	"$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "https://kodaktor.ru/95af06f",  
    "description": "User information",
    "type": "object",
    "properties": {
      "myName": {
        "type": "string"
      },
      "mySurname": {
        "type": "string"
      },
      "myMiddleName":{
      	"type": "string"
      },
      "programLanguages": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
  	"required": ["myName", "mySurname"]
}
```

Ссылка на json-schema 

https://kodaktor.ru/95af06f