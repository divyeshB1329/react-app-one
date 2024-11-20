import React from 'react'
import '../style/secOne.css'
import BlackLineOne from './BlackLineOne'
import Footer from './Footer'


const SecOne = () => {

    return (
        <>
        
            <section class="sec1">
                <div class="backImg"></div>
                <div class="cover">
                    <i class="left_arrow fa-solid fa-chevron-left"></i>
                    <i class="right_arrow fa-solid fa-chevron-right"></i>
                </div>
                <div class="text">
                    <h4>Welcome to</h4>
                    <h1>IT AGENCY</h1>
                    <h3>Web Designing, Development & Marketing</h3>
                </div>
                <div class="mouse"></div>
            </section>
            <section class="sec2">
                <BlackLineOne />
                <h2>We are one of the most effective Web Design Company</h2>
                <BlackLineOne />
                <div className="main">
                    <div className="gr1">
                        <img src="src/assets/Group1.png" alt="" />
                        <h2>UI/UX Design</h2>
                        <p>Our Design Thinking team conceptualizes intuitive, engaging, and aesthetically attractive User interface &#40;UI&#41; design that offers seamless User Experience &#40;UX&#41; across the web and mobile devices for your audience.</p>
                    </div>
                    <div className="gr1">
                        <img src="src/assets/Group1.png" alt="" />
                        <h2>Web Development</h2>
                        <p>We are Creative Nerds. We are Technocrats. But We are Passionate about creating a Successful Brand for You!!!</p>
                    </div>
                    <div className="gr1">
                        <img src="src/assets/Group1.png" alt="" />
                        <h2>Digital Marketing</h2>
                        <p>Nurture Your Vision, Magnify Your Brand & Increase Your Sales with inspiring Digital Marketing Solutions</p>
                    </div>
                </div>
                <BlackLineOne />
            </section>
            <section class="sec3">
                <img style={
                    {
                        width: '53px',
                        position: 'absolute',
                        top: '19.5%',
                        left: '30%',
                    }
                } src="src/assets/arrowRight.png" alt="" />
                <img style={
                    {
                        width: '53px',
                        position: 'absolute',
                        top: '42.5%',
                        left: '66.5%',
                    }
                } src="src/assets/arrowLeft.png" alt="" />
                <img style={
                    {
                        width: '53px',
                        position: 'absolute',
                        top: '65.8%',
                        left: '30%',
                    }
                } src="src/assets/arrowRight.png" alt="" />
                <div
                    style={
                        {
                            width: '10%',
                            height: '4%',
                            borderBottom: '2.5px dashed white',
                            rotate: '90deg',
                            marginBottom: '150px',
                            marginLeft: '0px',
                        }
                    }
                    class="white_line" ></div >

                <div class="box">
                    <div class="part1">
                        <h1>01</h1>
                        <h2>Strategy</h2>
                    </div>
                    <div class="part2">
                        <img src="src/assets/img1.jpg" alt="" />
                        <p>We begin our journey by analyzing your business
                            objectives and end-user requirements to create
                            a draft of Low-Fidelity Wireframes. </p>
                    </div>
                </div>
                <div class="box box2">
                    <div class="part2">
                        <p>We design and draft the appearance, feel, and
                            functionality of your product. </p>
                        <img src="src/assets/img2.jpg" alt="" />
                    </div>
                    <div class="part1">
                        <h2>Design</h2>
                        <h1>02</h1>
                    </div>
                </div>
                <div class="box">
                    <div class="part1">
                        <h1>03</h1>
                        <h2>Develop</h2>
                    </div>
                    <div class="part2">
                        <img src="src/assets/img4.jpg" alt="" />
                        <p>We use Agile methodology to collaborate and
                            iterate on the product design and development
                            until we achieve flawless UX/UI functionality and
                            experience.</p>
                    </div>

                </div>
                <div class="box box2">
                    <div class="part2">
                        <p>We provide maintenance and support if required.
                            We monitor the performance of your website/
                            application, fix bugs, and develop
                            new functionalities.</p>
                        <img src="src/assets/img3.jpg" alt="" />
                    </div>
                    <div class="part1">
                        <h2>Support</h2>
                        <h1>04</h1>
                    </div>
                </div>
                <div
                    style={
                        {
                            width: '15%',
                            height: '4%',
                            borderBottom: '2.5px dashed white',
                            rotate: '90deg',
                            marginBottom: '150px',
                            marginLeft: '0px',
                        }
                    }
                    class="white_line" ></div >

            </section>
            <button class="get">GET STARTED</button>
            <section class='sec4'>
                <BlackLineOne />
                <h2 style={{
                    fontSize: '60px',
                    margiTop: ' 20px',
                }}>Get in Touch</h2>
                <BlackLineOne />
                <div className="cards" style={{
                    display: 'flex',
                    gap: '60px',
                    marginTop: '10px'
                }}>
                    <div class="card1">
                        <img src="src/assets/phone.png" alt="" />
                        <h3>Call us</h3>
                        <p>New Accounts: 1-800-123-4567
                            Support: 1-800-123-4569</p>
                    </div>
                    <div class="card1">
                        <img src="src/assets/pwn.png" alt="" />
                        <h3>Write Us</h3>
                        <p>example@example.com
                            example@example.com</p>
                    </div>
                </div>
                <BlackLineOne />
            </section>
        </>
    )
}

export default SecOne
