import { useCallback, useState } from 'react';
import './callback.css';

function exemplo(){
    const [items, setItems] = useState([
        { id: 1, name: 'Enzo' },
        { id: 2, name: 'Stefany' },
        { id: 3, name: 'Victor' },
        { id: 4, name: 'Baseggio' },
        { id: 5, name: 'Winter' },
        { id: 6, name: 'Kaue' },
      ]);
    
      const [filter, setFilter] = useState('');
    
      // Usando useCallback para memorizar a função de filtro
      const filterItems = useCallback(() => {
        return items.filter(item => item.name.includes(filter));
      }, [items, filter]);
    
      const handleFilterChange = (event) => {
        setFilter(event.target.value);//pega o valor do input e armazena no filtro
      };
    
      return (
        <div>
          <h1>Lista de Itens</h1>
          <input
            type="text"
            placeholder="Filtrar por nome"
            value={filter}
            onChange={handleFilterChange}
          />
          <ul>
            {filterItems().map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    
}

export default exemplo;