export function ProductsIndex({ products, onShowProduct }) {
  return (
    <div>
      <h1>All products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={() => onShowProduct(product)}>More info</button>
        </div>
      ))}
    </div>
  );
}
