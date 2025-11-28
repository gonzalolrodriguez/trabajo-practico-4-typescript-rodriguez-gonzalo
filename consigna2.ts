function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}

let stock = 100;
console.log("Stock inicial:", stock);

let newStock = updateStock(stock, 50);
console.log("Nuevo stock después de agregar 50:", newStock);

newStock = updateStock(newStock, -20);
console.log("Nuevo stock después de restar 20:", newStock);
