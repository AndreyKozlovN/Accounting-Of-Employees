import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleProp, onInputSalaryChange}) => {

    const elements = data.map(elem => {

        const {id, ...elemProps} = elem;

        return (
            <EmployersListItem 
                key={id} 
                {...elemProps} 
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onInputSalaryChange={onInputSalaryChange}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;