import React from 'react'
import Container from '../elements/Container'
import TitlePage from '../elements/TitlePage'
import imgProd from '../images/images.png'
import styled from 'styled-components'
import {FaMinus, FaPlus} from 'react-icons/fa'
import Button from '../elements/Button'

const Product = () => {
    return (
        <>
        <TitlePage><h1>Producto</h1></TitlePage>
        <Container>
            
        <ProductContainer>
        <div className="single-product">
            <div className="row">
                <div className="col-6">
                    <div className="product-image">
                        <div className="product-image-main">
                            <img src={imgProd} alt="" id="product-main-image"/>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="product">
                        <div className="product-title">
                            <h2>Half Sleve T-shirt for Men</h2>
                        </div>
                        <div className="product-price">
                            <span className="offer-price">$99.00</span>
                        </div>

                        <div className="product-details">
                            <h3>Descripción</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est magnam quibusdam maiores sit perferendis minima cupiditate iusto earum repudiandae maxime vitae nostrum, ea cumque iste ipsa hic commodi tempore.</p>
                        </div>
                        <span className="divider"></span>

                        <div className="product-btn-group">
                            
                            <Button PlusMinus>
                              <FaMinus/>
                            </Button>

                            <input min='1' max='100' type='number' defaultValue='1'
                              className="quantity" style={{width: '50px'}} />

                            <Button PlusMinus>
                              <FaPlus/>
                            </Button>

                            <Button Agregar>Añadir al carrito</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </ProductContainer>

        </Container>
        </>
    );
}
 
export default Product;

const ProductContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-blue-t);
    backdrop-filter: saturate(100%) blur(4px);
    border-radius: 15px;

    .row{
        display: flex;
        gap: 0px;
    }

    .col-6{
        width: 50%;
    }

    .single-product{
        width: 1080px;
        position: relative;
    }

    .single-product .product-image{
        width: 100%;
    }

    .product-image .product-image-main{
        position: relative;
        display: block;
        height: 480px;
        padding: 30px;
    }

    .product-image-main img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
    }

    .product-title{
        margin-top: 20px;
    }
    
    .product-title h2{
        font-size: 32px;
        line-height: 2.4rem;
        font-weight: 700;
        letter-spacing: -0.02rem;
    }

    .product-price{
        display: flex;
        position: relative;
        margin: 10px 0;
        align-items: center;
    }

    .product-price .offer-price{
        font-size: 48px;
        font-weight: 700;
    }

    .product-details{
        margin: 10px 0;
    }

    .product-details h3{
        font-size: 18px;
        font-weight: 500;
    }

    .product-details p{
        margin: 5px 0;
        font-size: 14px;
        line-height: 1.2rem;
    }

    .divider{
        display: block;
        height: 2px;
        width: 98%;
        background: white;
        margin: 20px 0;
    }

    .product-btn-group{
        display: flex;
        height: 35px;
    }

    .product-btn-group .button{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 10px 24px;
        font-size: 16px;
        font-weight: 500;
    }

    .quantity{
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 20px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        display: none;
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield;
    }

    .product-btn-group .add-cart{
        background-color: var(--bg-grey);
        color: var(--grey);
        border-radius: 4px;
        cursor: pointer;
    }

    .product-btn-group .add-cart i{
        font-size: 20px;
    }

    .product-btn-group .add-cart:hover{
        box-shadow: 0 3px 6px var(--shadow);
        background: var(--grey);
        color: #fff;
    }
`;