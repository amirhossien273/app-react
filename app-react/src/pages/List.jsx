import React from "react";

import {  connect } from "react-redux";


import { getCategory } from "../redux/actions/category";
import {checkLogin} from "../plugin/checkLogin";
import {  Navigate} from "react-router-dom";
class  List extends React.Component {
 
    constructor(props) {
        super(props);
        this.showBox = this.showBox.bind(this);
        
      }

      PerformLogin = () => {

        // ...
    }
    redirect(){
    }
    componentDidMount() {
        if(checkLogin()){
           // alert(1);
        //   return (<Navigate replace to="/login" />);
        }
        this.redirect()
        this.props.getCategory();
        
    }
    showBox(id) {
        var x = document.getElementById(id);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    render() {
        if(checkLogin()){
            return (<Navigate to="/login"/>)
        }
    return (
    <div>
        <div style={{padding: "10px"}}><h2>List page</h2></div>
        <div>
        {this.props.categories.map((category, index) => {
        return (
          <div onClick={ () => {this.showBox(category.id)}} key={index}>
            <h4>
                <img style={{  width: "50px", height: "50px"}} src={category.url} />
                title: {category.title} 
            <div id= {category.id} >
                {category.chaild_category.map((child, index2) => {
                   return ( <div  key={index2}>{child.title}</div>)
                })} 
            </div>
            </h4>
          </div>
        );
      })} 
        </div>
       <div>
       </div>
    </div>);
    }
};
const mapStateToProps = state => ({
    categories: state.category.category
});
const mapDispatchToProps = () => ({ 
    getCategory, 
});


export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(List);