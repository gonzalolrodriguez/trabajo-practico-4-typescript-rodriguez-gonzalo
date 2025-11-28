# Glosario de Conceptos TypeScript

---

## 1. string

**Definición:** Tipo de dato para texto.
**Ejemplo:**

```typescript
let nombre: string = "Acuarius";
```

## 2. number

**Definición:** Tipo de dato para números.
**Ejemplo:**

```typescript
let precio: number = 3500;
```

## 3. Union Type

**Definición:** Permite que una variable sea de más de un tipo.
**Ejemplo:**

```typescript
let productId: string | number;
productId = "10";
productId = 20;
```

## 4. Interface

**Definición:** Define la estructura de un objeto.
**Ejemplo:**

```typescript
interface Product {
  name: string;
  price: number;
}
let myProduct: Product = { name: "Cepita", price: 2500 };
```

## 5. Función tipada

**Definición:** Se especifican los tipos de los parámetros y el retorno.
**Ejemplo:**

```typescript
function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}
```

## 6. Tipo literal

**Definición:** La variable solo puede tener valores exactos definidos.
**Ejemplo:**

```typescript
let orderStatus: "pending" | "shipped" | "delivered";
orderStatus = "shipped";
```

## 7. Enum

**Definición:** Conjunto de constantes con nombre.
**Ejemplo:**

```typescript
enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}
```
