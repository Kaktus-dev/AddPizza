import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock price="500" title="Чизбургер-пицца"/>
            <PizzaBlock price="400" title="Пеперони"/>
            <PizzaBlock price="450" title="Моцарела"/>
            <PizzaBlock price="550" title="Классическая"/>
            <PizzaBlock price="380" title="Гамбургер-пицца"/>
            <PizzaBlock price="520" title="Сушенная-пицца"/>
            <PizzaBlock price="640" title="Пивная-пицца"/>
            <PizzaBlock price="660" title="KFC-пицца"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
