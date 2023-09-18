const carros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18000 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12000 },
    { id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14000 },
    { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20000 },
    { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12000 },
    { id: 6, modelo: 'Onix', marca: 'Chevrolet', preco: 25000 },
    { id: 7, modelo: 'Palio', marca: 'Fiat', preco: 13000 },
    { id: 8, modelo: 'Prisma', marca: 'Chevrolet', preco: 15000 },
    { id: 9, modelo: 'Logan', marca: 'Renault', preco: 15000 }
  ]
  
  const data = carros
    .filter(item => item.preco >= 14000)
    .map(item => item.preco)
    .reduce((anterior, atual) => anterior + atual, 0)
  
  const total = data.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  
  console.log(total)
  // R$ 107,000.00