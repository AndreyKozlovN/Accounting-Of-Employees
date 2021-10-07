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
                {name: "Alexey C.", salary: 800, increase: false, rise: true, id: nextId()},
                {name: "Ivan B.", salary: 1800, increase: true, rise: false, id: nextId()},
                {name: "Konstantin G.", salary: 2000, increase: false, rise: false, id: nextId()},
            ],
            term: '',
            filter: 'all'
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
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: nextId()
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

    searchEmploy = (items, term) => {
        if (term.length === 0) return items;

        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onInputSalaryChange = (name, salary) => {
        this.setState(({data}) => ({
            data: data.map(elem => {
                if (elem.name === name) return {...elem, salary}
                return elem;
            })
        }))
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'onRise':
                return items.filter(item => item.rise);
            case 'onSalary':
                return items.filter(item => item.salary >= 1000);
            default: 
                return items;
        } 
    }

    onFilterButton = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmploy(data, term), filter);

        return (
            <div className='app'>
    
                <AppInfo numberEmployees={data.length}
                         increased={this.state.data.filter(e => e.increase).length}/>
    
                <div className="search-panel">
                    <SearchPanel 
                    onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter 
                        filter={filter}
                        onFilterButton={this.onFilterButton}/>
                </div>
    
                <EmployersList 
                    data={visibleData} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onInputSalaryChange={this.onInputSalaryChange}/>
    
                <EmployersAddForm 
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;