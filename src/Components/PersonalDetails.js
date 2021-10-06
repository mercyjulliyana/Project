import React from "react";
import "../Styles/PersonalDetails.css";
import Flag from "../Images/flag.jpg";
import history from './history';

class PersonalDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phn: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.name === '' || this.state.phn === '') {

            alert("Enter Your Details Here")
        }
        else {
            history.push('/CompanyDetails')
        }
    }

    handlechange(value) {
        this.setState({ name: value });
    }
    handlephn(value) {
        this.setState({ phn: value });
    }
    render() {
        return (
            <div className="Wrapper">
                <div className="header-items">
                    <label>PersonalDetails</label>
                    <label className="lbl-cmpny-det">CompanyDetails</label>
                    <label className="lbl-email-verfication">EmailVerification</label>

                </div>
                <div className="content">
                    <h1 className="Hed1">Add Your Personal Details</h1>
                    <p className="Hed2">Lorem ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>
                    <form className="form-content">
                   
                        <div className="content-row1">
                            <label className="lbl-fullname">Full Name</label>
                            <input type="text" className="inp-full-name" value={this.state.name} onChange={() => this.handlechange()}></input>
                        </div>
                      
                        <div className="content-row2">
                            <div className="lbl-gender">Gender</div>
                            <div className="lbl-gender-items">
                                <div className="lbl-male">
                                    <button className="male">Male</button>
                                </div>
                                <div className="lbl-female">
                                    <button className="female">Female</button>
                                </div>
                                <div className="lbl-other">
                                    <button className="other">Other</button>
                                </div>
                            </div>
                            <div className="content-row3">
                                <label className="lbl-fullname">Country</label>
                                <div className="row3-select">
                                    <img src={Flag} alt="" width="30" height="20" className="flag" />

                                    <select className="sel">
                                        <option value="0">India</option>
                                    </select>
                                </div>
                            </div>
                            <div className="content-row4">
                                <label className="lbl-fullname">State</label>
                                <select className="sel-tamilnadu">
                                    <option value="0">TamilNadu</option>
                                </select>
                            </div>
                            <div className="content-row4">
                                <label className="lbl-fullname">Phone</label>
                                <div className="row4-select">
                                    <img src={Flag} alt="" width="30" height="20" className="flag" />

                                    <select className="sel-phn">
                                        <option value="0">+91</option>
                                    </select>
                                    <input type="text" className="phn-inp" value={this.state.phn} onChange={() => this.handlephn()}></input>
                                </div>
                            </div>
                         
                            <div className="nextbutton">
                                <button className="nxt-btn" onClick={this.handleClick}>Next</button>
                            </div>
                            <div className="bottom-label">
                                <label>Already have an account?Log in</label>
                            </div>
                        </div>


                    </form>

                </div>


            </div>


        );

    }
}
export default PersonalDetails;