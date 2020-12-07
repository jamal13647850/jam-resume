import React, {Component} from 'react';

class Contact extends Component {
    
    render() {
        const handleSubmit = (e)=>{
            e.preventDefault();
            alert("Thank you Your message was received successfully");
        }
        return (
            <section id="contact" className="four">
                <div className="container">

                    <header>
                        <h2>Contact</h2>
                    </header>

                    <p>To contact me, please send your message through this form.</p>

                    <form method="post" action="#" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" /></div>
                            <div className="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email" /></div>
                            <div className="col-12">
                                <textarea name="message" placeholder="Message"></textarea>
                            </div>
                            <div className="col-12">
                                <input type="submit" value="Send Message" />
                            </div>
                        </div>
                    </form>

                </div>
            </section>
        );
    }
}

export default Contact;