# name-truncator
Truncates long names to 21 chars so they can be embossed on a card

## Examples
 
| firstName         | middleName        | lastName                    | result
| :---              | :---              | :---                        | :---          
|  John             | Alex              | Doe                         | John Alex Doe
|  Edgar            |                   | Poe                         | Edgar Poe
|  Jugemu           | Paipopaipo        | Paipo-no-shuringan          | J Paipo-no-shuringan
|  Maria            |                   | Luna-Guzman Alfrido-Trevino | Maria Luna Alfrido
|  Valentina        | Mikhailovna	      | Osipenkovskaya-Zadunayskaya | V M Osipenkovskaya


## How to use
```javascript
const trunc = require("./name-truncator/index.js");
let truncated = trunc(
          pre, //Dr
          firstName, //Muhammad
          middleName, //Mustafa
          lastName,  //El Baradei
          post //III
        );
console.log(truncated); //Muhammad M El Baradei
```
