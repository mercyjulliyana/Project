import React from "react";
import "../Styles/EmailVerification.css";
import history from './history';

class EmailVerification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            otp1: '',
            otp2: '',
            otp3: '',
            otp4: '',
            otp5: '',
        };
    }
    handleotp1(value) {
        this.setState({ otp1: value });
    }

    handleotp2(value) {
        this.setState({ otp2: value });
    }

    handleotp3(value) {
        this.setState({ otp3: value });
    }

    handleotp4(value) {
        this.setState({ otp4: value });
    }
    handleotp5(value) {
        this.setState({ otp5: value });
    }
    handleBackbtn() {
        history.goBack();
    }

    render() {
        return (
            <div className="Wrapper">
                <div className="header">
                    <label>PersonalDetails</label>
                    <label className="lbl-cmy-det">CompanyDetails</label>
                    <label className="lbl-email-vefcn">EmailVerification</label>

                </div>
                <div className="content">
                    <h1 className="Hed1">Enter Your OTP</h1>
                    <p className="Hed2">For your security,We need to identify your identity.We Sent a 5-digit</p>
                    <div className="label-align">
                        <label>Code to</label>&nbsp;
                        <label className="lbl-mailid">name@domain.com.</label>
                        <label>Please enter it below.</label>
                    </div>
                    <div className="wrapper-content">
                        <label className="label-enter-code">Enter Your Code</label>
                        <div className="box-content">
                            <div> <input type="text" className="box1" value={this.state.otp1} onChange={() => this.handleotp1()}></input></div>&nbsp;&nbsp;
                            <div><input type="text" className="box1" value={this.state.otp2} onChange={() => this.handleotp2()}></input></div>&nbsp;&nbsp;
                            <div><input type="text" className="box1" value={this.state.otp3} onChange={() => this.handleotp3()}></input></div>&nbsp;&nbsp;
                            <div><input type="text" className="box1" value={this.state.otp4} onChange={() => this.handleotp4()}></input></div>&nbsp;&nbsp;
                            <div><input type="text" className="box1" value={this.state.otp5} onChange={() => this.handleotp5()}></input></div>&nbsp;&nbsp;
                        </div>

                        <div className="btn">
                            <button className="btn-bck" onClick={this.handleBackbtn}>Back</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn-verify">Verify</button>
                        </div>
                        <div className="label-bottom">
                            <label className="lbl-bottom1">Didn't receive the email?Check your Spam filter for an email</label>
                            <div className="lbl-wrapper">
                                <label className="lbl-mail">from</label>&nbsp;&nbsp;
                                <label className="lbl-mail">name@domain.com</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default EmailVerification;