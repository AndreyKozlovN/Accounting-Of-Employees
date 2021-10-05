import './app-info.css';

const AppInfo = ({numberEmployees, increased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников внутри компании</h1>
            <h2>Количество сотрудников: {numberEmployees}</h2>
            <h2>Количество премий: {increased}</h2>
        </div>
    )
}

export default AppInfo;