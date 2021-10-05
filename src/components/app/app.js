import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import EmployersList from '../employers-list/employers-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: "Alexey C.", salary: 800, increase: false, id: 1},
                {name: "Ivan B.", salary: 1800, increase: true, id: 2},
                {name: "Konstantin G.", salary: 2000, increase: false, id: 3},
            ]
        }
    } 

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(element => element.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArray = [...before, ...after];
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        const {data} = this.state;

        return (
            <div className='app'>
    
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter />
                </div>
    
                <EmployersList 
                    data={data} 
                    onDelete={this.deleteItem}/>
    
                <EmployersAddForm />
            </div>
        );
    }
}

export default App;