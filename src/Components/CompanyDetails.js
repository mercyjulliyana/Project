import React from "react";
import "../Styles/CompanyDetails.css";
import UploadIcon from "../Images/uploadIcon.png";
import history from './history';

class CompanyDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: "",
            emailid: "",
            jobtitle: "",
            Experience: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handlebackbtn = this.handlebackbtn.bind(this);
    }

    handleCompanyChange(value) {
        this.setState({ companyName: value })
    }
    handleemailidChange(value) {
        this.setState({ emailid: value })
    }
    handlejobtitleChange(value) {
        this.setState({ jobtitle: value })
    }
    handleexperienceChange(value) {
        this.setState({ Experience: value })
    }

    handleClick() {
        if (this.state.companyName === '' || this.state.emailid === '' || this.state.jobtitle === '' || this.state.Experience === '') {
            alert("Enter Your Company Details")
        }
        else {
            history.push('/EmailVerification')
        }
    }
    handlebackbtn() {
        history.goBack();
    }

    render() {
        return (
            <div className="Wrapper">
                <div className="header">
                    <label>PersonalDetails</label>
                    <label className="lbl-cmpny-det">CompanyDetails</label>
                    <label className="lbl-email-verfication">EmailVerification</label>

                </div>
                <div className="content">
                    <h1 className="Hed1">Add Your Company Details</h1>
                    <p className="Hed2">Lorem ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>
                    <form className="form-content">
                        <div className="row1">
                            <img src={UploadIcon} className="uploadicon" />
                            <label className="lbl-company-logo">Upload Your Company Logo</label>
                        </div>
                        <div className="content-row2">
                            <label className="lbl-cmp-name">Company Name</label>
                            <input type="text" className="cmpny-full-name" value={this.state.companyName} onChange={() => this.handleCompanyChange()}></input>
                        </div>
                        <div className="content-row3">
                            <label className="lbl-cmp-name">Email Id</label>
                            <input type="text" className="cmpny-full-name" value={this.state.emailid} onChange={() => this.handleemailidChange()}></input>
                        </div>
                        <div className="content-row4">
                            <label className="lbl-cmp-name">Job Title</label>
                            <input type="text" className="cmpny-full-name" value={this.state.jobtitle} onChange={() => this.handlejobtitleChange()}></input>
                        </div>
                        <div className="content-row5">
                            <label className="lbl-cmp-name">Years Of Experience</label>
                            <input type="text" className="cmpny-full-name" value={this.state.Experience} onChange={() => this.handleexperienceChange()}></input>
                        </div>
                        <div className="content-row6">
                            <input type="checkbox" />
                            <label> I accept the Terms and conditions</label>
                        </div>
                        <div className="content-row7">
                            <button className="back-btn" onClick={this.handlebackbtn}>Back</button>
                            <div className="btn-align">
                                <button className="sendotp-btn" onClick={this.handleClick}>SendOTP</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}
export default CompanyDetails;