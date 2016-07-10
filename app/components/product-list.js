import React from 'react';

export default function(props) {
  if (!Object.keys(props.products).length){
    return (
      <h1>No products selected</h1>
    )
  }
  return (
    <div className="products-table">
      <h1>{props.title}</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {props.products.map(product => {
            return (
              <tr key={product.id} className="product-row">
                <td className="name-cell">{product.name}</td>
                <td className="price-cell">{product.price}</td>
                <td className="button-cell"><button onClick={props.toggleSelected.bind(null, product.id)}>{product.selected ? 'Remove From Selected' : 'Add To Selected'}</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
