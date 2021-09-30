import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import EmployersList from '../employers-list/employers-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

function App() {
    return (
        <div className='app'>
            <AppInfo />

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter />
            </div>

            <EmployersList />

            <EmployersAddForm />
        </div>
    );
}

export default App;