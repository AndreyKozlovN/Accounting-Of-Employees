import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-danger"
                type="button">
                    Все сотрудники
            </button>
            <button 
                className="btn btn-outline-danger"
                type="button">
                    Сотрудники на повышение
            </button>
            <button 
                className="btn btn-outline-danger"
                type="button">
                    З/П более 1000$
            </button>
        </div>
    )
}

export default AppFilter;