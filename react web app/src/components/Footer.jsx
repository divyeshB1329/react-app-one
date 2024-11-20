import React from 'react'
import '../style/footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div class="circle"></div>
                <div class='foot'>
                    <h2>Lorem Ipsum</h2>
                    <div className="icon">
                        <img style={{width:'11px'}} src="src/assets/facebook.png" alt="" />
                        <img src="src/assets/X.png" alt="" />
                        <img src="src/assets/G.png" alt="" />
                        <img src="src/assets/LinkedIn.png" alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
