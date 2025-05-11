import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                { this.props.city &&
                    <>
                    <p>Local: {this.props.city}, {this.props.country}</p>
                    <p> temp: {this.props.temp}</p>
                    </>
                }
            </div>
        );
    }
}

export default Weather;
