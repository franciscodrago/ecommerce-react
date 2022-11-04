const products =  [
  { 
      id: '1', 
      name: 'Buzo Batic', 
      price: 9000, 
      category: 'Buzos', 
      img:'https://equus.vtexassets.com/arquivos/ids/232436-1600-auto?v=637848739585400000&width=1600&height=auto&aspect=true', 
      stock: 30, 
      description:'Descripción de Buzo Batic',
  },
  { id: '2', name: 'Jean Ocean', price: 10000, category: 'Jeans', img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/350/594/products/vita70001-695040cec0f33885d116538498787549-640-0.jpg', stock: 16, description:'Descripción de Jean Ocean'},
  { id: '3', name: 'Rompevientos', price: 12000, category: 'Camperas', img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/350/594/products/vita66941-a40cb791ad46c4612d16538457252314-1024-1024.jpg', stock: 20, description:'Descripción de Campera'},
  { id: '4', name: 'Jogger', price: 11000, category: 'Joggers', img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/350/594/products/vita-ss23395721-eaa928478330b9845816650689242703-640-0.jpg', stock: 10, description:'Descripción de Jogger'},
  { id: '5', name: 'Buzo Las Leñas', price: 1200, category: 'Buzos', img:'https://equus.vtexassets.com/arquivos/ids/233193-1600-auto?v=637858855468800000&width=1600&height=auto&aspect=true', stock: 6, description:'Descripción de Buzo Las Leñas'},
  { id: '6', name: 'Jean Slim', price: 19000, category: 'Jeans', img:'https://equus.vtexassets.com/arquivos/ids/247316-1600-auto?v=638023061163230000&width=1600&height=auto&aspect=true', stock: 4, description:'Descripción de Jean Slim'},
]

export const getProducts = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products)
      }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise (resolve => {
      setTimeout(() => {
          resolve(products.find(prod => {
              return prod.id === id
          }))
      }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise (resolve => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.category === categoryId))
      }, 500)
  })
}