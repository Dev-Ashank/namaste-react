import './Error.css'
import { useRouteError } from 'react-router-dom';
const Error = () => {
    const error = useRouteError(Error);
    return (
        <div className="dancing-404">
            <div className="error-text">

                <h1>{error.status}</h1>
                <h2>{error.data}</h2>
                <p>{error.statusText}</p>

            </div>
        </div>
    )
}

export default Error;