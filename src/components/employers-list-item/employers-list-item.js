import { Component } from 'react';

import './employers-list-item.css';

 class EmployersListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    toggleLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    toggleIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    render() {

        const {name, salary, onDelete} = this.props;
        const {increase, like} = this.state;

        let classIncrease = increase ? 'increase' : false;
        let classLike = like ? 'like' : false;

        return (
            <li className={classLike + " list-group-item d-flex justify-content-between " + classIncrease}>
                <span className="list-group-item-label" onClick={this.toggleLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + ' $'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.toggleIncrease}>
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