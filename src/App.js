import Header from './components/Header';
import Card from './components/Card';
import Cart from './components/Cart';

const crd = [
  { id: '', title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999', pict: 'img/sneaker_1.jpg' },
  { id: '', title: 'Мужские Кроссовки Nike Air Max 270', price: '12 999', pict: 'img/sneaker_2.jpg' },
  { id: '', title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499', pict: 'img/sneaker_3.jpg' },
  { id: '', title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999', pict: 'img/sneaker_4.jpg' },
  { id: '', title: 'Мужские Кроссовки Under Armour Curry 8', price: '15 199', pict: 'img/sneaker_5.jpg' },
  { id: '', title: 'Мужские Кроссовки Nike Kyrie 7', price: '11 299', pict: 'img/sneaker_6.jpg' },
  { id: '', title: 'Мужские Кроссовки Jordan Air Jordan 11', price: '10 799', pict: 'img/sneaker_7.jpg' },
  { id: '', title: 'Мужские Кроссовки Nike LeBron XVIII', price: '16 499', pict: 'img/sneaker_8.jpg' },
  { id: '', title: 'Мужские Кроссовки Nike Lebron XVIII Low', price: '13 999', pict: 'img/sneaker_9.jpg' }
]

function App() {
  return (
    <div className="wrapper">
      <Cart />

      <Header />

      <div className="content p-40">
        <div className='d-flex justify-between align-center mb-40'>
          <h1 className='title__main'>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src="img/search__icon.svg" alt='search' />
            <input placeholder='Поиск...' className='search__input'/>
          </div>
        </div>
        
        <div className='card__container d-flex'>

          {crd.map((obj) => (

            <Card 
              title={obj.title}
              price={obj.price}
              pict={obj.pict}
            />

          ))}

        </div>
      
      </div>
    </div>
  );
}

export default App;
