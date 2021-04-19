import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact my-5 py-5">
        <div className="container">
            <div className="section-header text-center text-white mb-5 ">
                 <h3 className="contact-title">Always  connect with us</h3>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address *"/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject *"/>
                    </div>
                   <br/>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" rows="4" placeholder="Message *"></textarea>
                    </div>
                    <br/>
                    <div className="form-group text-center">
                        <button type="button" className="btn btn-dark text-white "> <h5 className="contact-title">Submit</h5> </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Contact;