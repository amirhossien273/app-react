import React from "react";
import { connect } from "react-redux";
import UploadFile from "../components/UploadFile";
import { editeValueCategory,createCategory } from "../redux/actions/category";



class Create extends React.Component {

    handleInputChange = e =>{        
        this.props.editeValueCategory(e.target.name,e.target.value )
    }

    render() {
        return (
            <div >
                <div style={{padding: "10px"}}><h2>Create page</h2></div>
                <div style={{margin: "auto"}} className="col-md-4">
                  {this.props.create_category.file}
                    <form onSubmit={this.submitForm}>
                        <input
                            className="form-control"
                            name="file"
                            type="hidden"
                            value={this.props.create_category.file}
                            />
                        <div>
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">upload file</label>
                            <UploadFile/>
                        </div>
                        <div  className="form-group">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">title</label>
                            <input
                                className="form-control"
                                name="title"
                                type="text"
                                value={this.props.create_category.title}
                                 onChange={this.handleInputChange}
                                label="Password"
                            />
                    </div>
                    <div style={{marginTop: "10px"}} className="form-group mb-3">
                    <button className="btn btn-success" type="submit">submit</button>
                    </div>
                    </form>
                </div>
            </div>);
    }
    submitForm = e => {
        e.preventDefault();
        this.props.createCategory(this.props.create_category);
    };

};

const mapStateToProps = state => ({
    create_category: state.category.create_category
});
const mapDispatchToProps = () => ({ 
    editeValueCategory, 
    createCategory
});


export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(Create);