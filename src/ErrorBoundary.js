import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null,errorInfo: null };
    }
    componentDidCatch(error,errorInfo) {
    this.setState({
        error:error,
        errorInfo:errorInfo
    })   

    }
    render() {
        if(this.state.errorInfo) {
            return (
                <div>
                    <h2> An Error Has Occurred</h2>
                    <datalist>
                        {this.state.error&& this.state.error.tostring()}
                        <br/>
                        {this.state.errorInfocomponentStack}
                    </datalist>
                </div>
            );
        }
        }
    }
