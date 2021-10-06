import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'onRise', label: 'Сотрудники на повышение'},
        {name: 'onSalary', label: 'З/П более 1000$'},
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-danger' : ' btn-outline-danger';
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterButton(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;