import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export default function Home() {
    return (
root.render(
  <React.StrictMode>
     <div>
            <div className="App">

                <div className="main">

                    <div className="item-menu">
                        <a href="#"> Sobre</a>
                        <a href="#"> Pedido</a>
                        <a href="#"> Doações</a>
                    </div>

                    <div className="form">
                        <form>
                            <h3>Formulário para cadastro de pedido</h3>
                            <div className="items-form">

                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
  
  </React.StrictMode>
)
)
}


      
       