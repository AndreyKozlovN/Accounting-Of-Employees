import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({data}) => {

    const elements = data.map(elem => {

        const {id, ...elemProps} = elem;

        return (
            // <EmployersListItem name={e.name} salary={e.salary}/>
            <EmployersListItem key={id} {...elemProps}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;