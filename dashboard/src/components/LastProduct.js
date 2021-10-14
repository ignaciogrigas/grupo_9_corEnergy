import '../css/last_product.css';

function LastProduct(props) {
  return (
    <div className="last_product">
        <h2>Last product added</h2>
        <section>
            <article>
                <figure>
                    <img src={props.image} alt="product"></img>
                </figure>
            </article>
            <article>
                <ul>
                    <li>
                        <h3>{props.name}</h3>
                    </li>
                    <li>
                        <h5>{props.category}</h5>
                    </li>
                    <li>
                        <p>{props.description}</p>
                    </li>
                    <li>
                        <p>{props.code}</p>
                    </li>
                </ul>
                <h5 className="price">$ {props.price}</h5>
            </article>
        </section>
    </div>
  );
}

export default LastProduct;