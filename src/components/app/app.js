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
        if(name.length <= 0 || salary.length <= 0) return;
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

    // onToggleIncrease = (id) => {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(elem => elem.id === id);
    //         const oldItem = data[index];
    //         const newItem = {...oldItem, increase: !oldItem.increase};
    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //         return {
    //             data: newArr
    //         }
    //     })
    // }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) return {...item, increase: !item.increase}
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) return {...item, rise: !item.rise}
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
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
    
                <EmployersAddForm 
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;