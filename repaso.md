# Repaso

Todo lo que vaya dentro de unas llaves {} es un bloque.


## Funciones flecha.

Las funciones flecha si no tienen parámetros necesitan tener los (), si solo tiene un parámetro se puede poner o no el paréntesis. Si tiene más de parámetro debemos poner los ().
```
const sum3 = (num1, num2)=>{ 
    return num1 + num2;
}
```

Si solo se ejecuta una línea de código, le podemos quitar las llaves y el return.

```
const sum4 = (num1, num2) => num1 + num2; 
```

Estas variables anónimas y todas las que esten definidas dentro de una constante no se recolocan, entonces tendremos que tener cuidado con como colocamos el código. 

1. DOM
2. Variables
3. Funciones
4. Resto del código.

``` js
// FUNCIONES NO FLECHA

// Función con nombre

function sum(num1, num2){
    return num1 + num2;
}

//Función asignada en una variable.

const sum2 = function(num1, num2){
    return num1 + num2;
}
// Esta función al estar metida dentro de una variable no se reordena 
// automaticamente así que solo podrá ser utilizada después de ser definida.

// FUNCIONES FLECHA

// Son funciones anónimas así que han de ser asigandas dentro de una variable o constante.

const sum3 = (num1, num2)=>{ 
    return num1 + num2;
}
const sum4 = (num1, num2) => num1 + num2;

```

### Maneras de escribir la misma función.


```js
// Distintas maneras de escribir una función, todas funcionan igual.
 const paco2 = function () {
     console.log('yupi');
 }

 function paco(){
     console.log('yay');
 }

 btn.addEventListener('click', function () {
     console.log('click');
 })
 btn.addEventListener('click', () => {
     console.log('click');
 })
 btn.addEventListener('click', paco);
```
