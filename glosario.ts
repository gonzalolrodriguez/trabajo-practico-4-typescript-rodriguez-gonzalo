console.log("=== GLOSARIO DE TYPESCRIPT ===\n");

console.log("1. STRING");
console.log("Definición: Tipo de dato que representa texto");
console.log("Ejemplo:");
let nombre: string = "Juan";
console.log(nombre);
console.log("");

console.log("2. NUMBER");
console.log(
  "Definición: Tipo de dato que representa números enteros o decimales"
);
console.log("Ejemplo:");
let edad: number = 25;
console.log(edad);
console.log("");

console.log("3. UNION TYPE");
console.log(
  "Definición: Permite que una variable tenga más de un tipo posible"
);
console.log("Ejemplo:");
let id: string | number = 123;
console.log(id);
id = "ABC";
console.log(id);
console.log("");

console.log("4. INTERFACE");
console.log(
  "Definición: Define la estructura de un objeto con sus propiedades y tipos"
);
console.log("Ejemplo:");
interface Persona {
  nombre: string;
  edad: number;
}
let usuario: Persona = { nombre: "Ana", edad: 30 };
console.log(usuario);
console.log("");

console.log("5. FUNCTION TYPING");
console.log(
  "Definición: Especificar tipos para parámetros y valor de retorno de funciones"
);
console.log("Ejemplo:");
function sumar(a: number, b: number): number {
  return a + b;
}
console.log(sumar(5, 3));
console.log("");

console.log("6. LITERAL TYPE");
console.log("Definición: Tipo que solo acepta valores específicos exactos");
console.log("Ejemplo:");
let estado: "activo" | "inactivo" = "activo";
console.log(estado);
console.log("");

console.log("7. ENUM");
console.log(
  "Definición: Conjunto de constantes nombradas con valores relacionados"
);
console.log("Ejemplo:");
enum Direccion {
  Norte = "Norte",
  Sur = "Sur",
  Este = "Este",
  Oeste = "Oeste",
}
let direccion: Direccion = Direccion.Norte;
console.log(direccion);
console.log("");

console.log("8. VOID");
console.log("Definición: Indica que una función no retorna ningún valor");
console.log("Ejemplo:");
function saludar(): void {
  console.log("Hola");
}
saludar();
console.log("");

console.log("9. TYPE ANNOTATION");
console.log("Definición: Especificar explícitamente el tipo de una variable");
console.log("Ejemplo:");
let precio: number = 100;
console.log(precio);
console.log("");

console.log("10. TYPE INFERENCE");
console.log(
  "Definición: TypeScript deduce automáticamente el tipo sin especificarlo"
);
console.log("Ejemplo:");
let ciudad = "Madrid";
console.log(typeof ciudad);
