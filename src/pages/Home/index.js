import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/mochila-oakley-icon-pack-40-militar/60/D63-5550-060/D63-5550-060_detalhe2.jpg?ims=326x"
          alt="Mochila Oakley"
        />
        <strong>Mochila Oakley</strong>
        <span>R$ 559,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add on cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/mochila-oakley-icon-pack-40-militar/60/D63-5550-060/D63-5550-060_detalhe2.jpg?ims=326x"
          alt="Mochila Oakley"
        />
        <strong>Mochila Oakley</strong>
        <span>R$ 559,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add on cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/mochila-oakley-icon-pack-40-militar/60/D63-5550-060/D63-5550-060_detalhe2.jpg?ims=326x"
          alt="Mochila Oakley"
        />
        <strong>Mochila Oakley</strong>
        <span>R$ 559,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add on cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/mochila-oakley-icon-pack-40-militar/60/D63-5550-060/D63-5550-060_detalhe2.jpg?ims=326x"
          alt="Mochila Oakley"
        />
        <strong>Mochila Oakley</strong>
        <span>R$ 559,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add on cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/mochila-oakley-icon-pack-40-militar/60/D63-5550-060/D63-5550-060_detalhe2.jpg?ims=326x"
          alt="Mochila Oakley"
        />
        <strong>Mochila Oakley</strong>
        <span>R$ 559,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add on cart</span>
        </button>
      </li>
    </ProductList>
  );
}
