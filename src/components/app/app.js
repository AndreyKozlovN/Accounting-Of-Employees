import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import EmployersList from '../employers-list/employers-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

function App() {

    const data = [
        {name: "Alexey C.", salary: 800, increase: false, id: 1},
        {name: "Ivan B.", salary: 1800, increase: true, id: 2},
        {name: "Konstantin G.", salary: 2000, increase: false, id: 3},
    ];

    return (
        <div className='app'>

            <AppInfo />

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter />
                
            </div>

            <EmployersList data={data}/>

            <EmployersAddForm />
        </div>
    );
}

export default App;