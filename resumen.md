# Sistemas Web

**Tabla de contenidos**
1. [**Introducción**](#introducción)
2. [**HTML4 a HTML5**](#tema1)  
2.1 [Ejercicios](#ejer-tema1)
3. [**Javascript basico**](#tema2)  
3.1 [Arrays](#arrays)  
3.2 [Ejercicios](#ejer-tema2)
4. [**Javascript y DOM**](#tema3)

## Introducción <a name="intro"></a>
juanan.pereira@ehu.eus

| Lunes         | Martes        |
|---------------|---------------|
| 08:30 - 10:30 | 08:30 - 10:30 |
| 11:00 - 12:00 | 11:00 - 12:00 |

[intro.pdf](files/intro.pdf)

1. HTML4 a HTML5
2. Intro Javascript y DOM 
3. Javascript Events 
4. fetch() and JSON 
5. Canvas and video API 
6. Backend

[presentacion.pdf](files/presentacion.pdf)

## HTML4 a HTML5 <a name="tema1"></a>

[tema1.pdf](files/tema1.pdf)

### 1. Cabecera DOCTYPE

**HTML4**:
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML + SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/xhtml-svg11.dtd">
```

**HTML5**:
```
<!DOCTYPE html>
```

### 2. Etiquetas meta
**HTML4**:
```
<meta http-equiv="Content-type" content="text/html;charset=UTF-8">
```

**HTML5**:
```
<meta charset="UTF-8">
```

### 3. Hojas de estilo CSS
**HTML4**:
```
<link rel="stylesheet" type="text/css" href="style.css">
```

**HTML5**:
```
<link rel="stylesheet" href="style.css">
```

### 4. Scripts Javascript
**HTML4**:
```
<script type="text/javascript" src="script.js"></script>
```

**HTML5**:
```
<script src="script.js"></script>
```

### 5. Etiquetas de HTML
**HTML4**:
```
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
```

**HTML5**:
```
<html lang="en">
```

### 6. Etiquetas semánticas
**HTML4**:
```
<div id="header"></div>
<div id="navigation"></div>
<div id="content"></div>
<div id="footer"></div>
```

**HTML5**:
```
<header></header>
<nav></nav>
<article></article>
<section></section>
<aside></aside>
<footer></footer>
```

### Ejercicios <a name="ejer-tema1"></a>
#### [Enunciados](files/ejercicios-tema1/enunciados.pdf)
- [Ejercicio 1](files/ejercicios-tema1/ejer1.html)
- [Ejercicio 2](files/ejercicios-tema1/ejer2.html)
- [Ejercicio 3](files/ejercicios-tema1/ejer3.html)
- [Ejercicio 4](files/ejercicios-tema1/ejer4.html)
- [Ejercicio 5](files/ejercicios-tema1/ejer5.html)
- [Ejercicio 6](files/ejercicios-tema1/ejer6.html)
- [Ejercicio 7](files/ejercicios-tema1/ejer7.html)
#### [Soluciones](files/ejercicios-tema1/soluciones.pdf)

## Javascript basico <a name="tema2"></a>
[tema2.pdf](files/tema2.pdf)

### Apuntes
```
// Un comentario

// Variables y constantes
let x = 5
x = "Hola"
const EDAD = 18
var aprobado = False

// Bucle while
var i = 0
while (i < 10) {
    beberCerveza()
    i++
}

// Bucle for
for (let i = 0; i < 10; i++) {
    beberCerveza()
}

// Condicionales
if (x > 10) {
    beberCerveza()
} else {
    beberAgua()
}

// Arrays
var tabla = new Array()
tabla[0] = "Juan"
tabla[1] = "Ana"

tabla.length
```

### Arrays <a name="arrays"></a>
```
Apuntes sobre arrays en Javascript:  
[arrays.pdf](files/arrays.pdf)

**Código de ejemplo para cada método de arrays:**  
[metodos_arrays.js](files/metodos_arrays.js)

**Resultado de *metodos_arrays.js*:**
1) [ 'Real Madrid', 'Barcelona', 'Atletico de Madrid' ]
2) [ 'Juan', 'Ana' ]
3) [ 'Real Madrid', 'Barcelona', 'Atletico de Madrid', 'Juan', 'Ana' ]
4) 0
5) Real Madrid - Barcelona - Atletico de Madrid
6) [ 'Juan', 'Ana' ]
7) [ 'Juan', 'Ana', 'Luis' ]
8) [ 'Juan', 'Ana' ]
9) [ 'Ana' ]
10) [ 'Juan', 'Ana' ]
11) [ 'Ana', 'Juan' ]
12) [ 'Atletico de Madrid', 'Barcelona', 'Real Madrid' ]
13) [ 1, 2 ]
14) [ 1, 2, 3, 4, 5, 6 ]
15) [ 1, 2, 3 ]
16) [ 4, 5, 6 ]
17) Alex,Juan,Tomy,John
```

### Ejercicios <a name="ejer-tema2"></a>
[**Enunciados**](files/ejercicios-tema2/enunciados.pdf)

- [Ejercicio 1](files/ejercicios-tema2/ejer1.js)
- [Ejercicio 2](files/ejercicios-tema2/ejer2.js)
- [Ejercicio 3](files/ejercicios-tema2/ejer3.js)
- [Ejercicio 4](files/ejercicios-tema2/ejer4.js)
- [Ejercicio 5](files/ejercicios-tema2/ejer5.js)
- [Ejercicio 6](files/ejercicios-tema2/ejer6.js)
- [Ejercicio 7](files/ejercicios-tema2/ejer7.js)
- [Ejercicio 8](files/ejercicios-tema2/ejer8.js)
- [Ejercicio 9](files/ejercicios-tema2/ejer9.js)
- [Ejercicio 10](files/ejercicios-tema2/ejer10.js)
- [Ejercicio 11](files/ejercicios-tema2/ejer11.js)
- [Ejercicio 12](files/ejercicios-tema2/ejer12.js)
- [Ejercicio 13](files/ejercicios-tema2/ejer13.js)

[**Soluciones**](files/ejercicios-tema2/soluciones.pdf)

## Javascript y DOM <a name="tema3"></a>
[tema3.pdf](files/tema3.pdf)

