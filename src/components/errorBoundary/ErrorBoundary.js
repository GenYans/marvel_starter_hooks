import { Component } from "react/cjs/react.production.min";
import ErrorMessage from '../errorMessage/errorMessage';

import './ErrorBoundary.scss';

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <h2 className="errorMessage">Something went wrong<ErrorMessage/></h2>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

