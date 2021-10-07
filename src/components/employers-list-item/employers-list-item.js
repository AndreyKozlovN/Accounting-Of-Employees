import { Component } from 'react';

import './employers-list-item.scss';

class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: this.props.salary
        }
    }

    onInputSalaryChange = (e) => {
        const salaryChange = e.target.value;
        this.setState({salary: salaryChange});
        this.props.onInputSalaryChange(this.props.name, salaryChange);
    }

    render() {
        const {name, onDelete, onToggleProp, increase, rise} = this.props;

        let classIncrease = increase ? 'increase' : false;
        let classLike = rise ? 'like' : false;
    
        return (
            <li className={`${classLike} ${classIncrease} list-group-item d-flex justify-content-between`}>
                <span 
                    className="list-group-item-label" 
                    onClick={onToggleProp} 
                    data-toggle="rise">
                        {name}</span>
                <input 
                    type="text" 
                    className="list-group-item-input" 
                    value={this.state.salary}
                    onChange={this.onInputSalaryChange}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployersListItem;