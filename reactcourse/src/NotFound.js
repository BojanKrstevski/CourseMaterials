import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Not found</h2>
            <Link to="/">Back to d homepage</Link>
        </div>
      );
}
 
export default NotFound;