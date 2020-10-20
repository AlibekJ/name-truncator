# name-truncator
Truncates long names to 21 chars so they can be embossed on a card

## Examples
"John", "Alex", "Doe" becomes "John Alex Doe"
"Edgar", "Poe" becomes "Edgar Poe"
"Jugemu", "Paipopaipo",	"Paipo-no-shuringan" becomes "J Paipo-no-shuringan"
"Maria", "Luna-Guzman Alfrido-Trevino" becomes "Maria Luna Alfrido"

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
