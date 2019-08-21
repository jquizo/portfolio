import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <section className="contact-page">
                <h1>
                    Contact <span class="text-secondary">Details</span>
                </h1>
                <div class="boxes">
                    <div>
                        <span><b>Email:</b></span> jason.req@gmail.com
                    </div>
                    <div>
                        <span><b>Mobile:</b></span> 0431369671
                    </div>
                    <div>
                        <span>Message me on
                    <a href="https://au.linkedin.com/in/jason-requizo-b362a8124"> LinkedIn.</a>
                        </span>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact