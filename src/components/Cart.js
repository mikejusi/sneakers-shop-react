function Cart(props) {
    return (
        <div className='overlay'>
            <div className='right__board'>
            <div className='d-flex'>          
                <h3 className='cart__title'>Корзина</h3>
                <img onClick={props.onClose} className='remove__btn ml-auto' src="img/remove__item.svg" alt='close' />
            </div>

            <div className='cart__content'>

                <div className='cart__item d-flex align-center'>
                <img className='mr-20' width={70} height={70} src="img/sneaker_1.jpg" alt='item' />
                <div className='cart__item__desc mr-20'>
                    <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <p>12 999 руб.</p>
                </div>
                <button className='remove__btn'>
                    <img src="img/remove__item.svg" alt='remove' />
                </button>
                </div>

                <div className='cart__item d-flex align-center'>
                <img className='mr-20' width={70} height={70} src="img/sneaker_1.jpg" alt='item' />
                <div className='cart__item__desc mr-20'>
                    <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <p>12 999 руб.</p>
                </div>
                <button className='remove__btn'>
                    <img src="img/remove__item.svg" alt='remove' />
                </button>
                </div>

            </div>

            <ul className='cart__total'>
                <li className='list__total d-flex'>
                <span>Итого:</span>
                <div className='line__total'></div>
                <b>21 498 руб.</b>
                </li>

                <li className='list__total d-flex'>
                <span>Налог 5%:</span>
                <div className='line__total'></div>
                <b>1074 руб.</b>
                </li>
            </ul>
            <button className='cart__buy'>Оформить заказ <img className='arrow__buy' src="img/arrow.svg" alt='->' /></button>
            </div>
        </div>
    );
    }
    
export default Cart;