import React from "react";
import { connect } from "react-redux";


import { editeValue,login } from "../redux/actions/users";

class Login extends React.Component {
    render() {
    return (
        <div>
            <div style={{padding: "10px"}}><h2>login page</h2></div>
            <div style={{margin: "auto"}} className="col-md-4">
            <form onSubmit={this.submitForm}>
                {this.props.users.emali}
                <div className="form-group">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <input
                    className="form-control"
                    name="email"
                    type="text"
                    value={this.props.users.email}
                    onChange={this.handleInputChange}
                    label="Username"
                />
                </div>
                <div  className="form-group">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">name</label>
                <input
                    className="form-control"
                    name="password"
                    type="password"
                    value={this.props.users.password}
                    onChange={this.handleInputChange}
                    label="Password"
                />
                </div>
                <div style={{marginTop: "10px"}} className="form-group mb-3">
                   <button className="btn btn-success" type="submit">login</button>
                </div>
        </form>
            </div>
        </div>);
    }
    submitForm = e => {
        e.preventDefault();
        this.props.login(this.props.users);
    };

    handleInputChange = e =>{        
        this.props.editeValue(e.target.name,e.target.value )
    }

};
const mapStateToProps = state => ({
    users: state.users.users
});
const mapDispatchToProps = () => ({ 
    editeValue,
    login
});
export default connect(mapStateToProps, mapDispatchToProps())(Login);