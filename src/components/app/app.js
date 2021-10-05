import { Component } from 'react';

import nextId from "react-id-generator";

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
                {name: "Alexey C.", salary: 800, increase: false, rise: true, id: 1},
                {name: "Ivan B.", salary: 1800, increase: true, rise: false, id: 2},
                {name: "Konstantin G.", salary: 2000, increase: false, rise: false, id: 3},
            ]
        }
    } 

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        if (name.length <= 2 || salary.length <= 0) return;
        const htmlId = nextId();
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: htmlId
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) return {...item, [prop]: !item[prop]}
                return item;
            })
        }))
    }

    render() {
        const {data} = this.state;

        return (
            <div className='app'>
    
                <AppInfo numberEmployees={data.length}
                         increased={this.state.data.filter(e => e.increase).length}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter />
                </div>
    
                <EmployersList 
                    data={data} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
    
                <EmployersAddForm 
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;