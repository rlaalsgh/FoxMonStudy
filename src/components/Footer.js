import './Footer.css';

const Footer = () => {

    return ( 
        <footer className = "footer_body">
            <div className = "footer_row">
                <div className = "footer-col">
                    <h2>FOXMON-STUDY</h2>
                    <p>
                        Company : FoxMonStudy <br/>
                        Company registration number : ooo-ooo <br/>
                        Address : ooo-ooo-ooo <br/>
                        Tel : ooo-ooo-ooo
                    </p>
                </div>
                <div className = "footer-col">
                    <h2>SERVICE</h2>
                    <p>
                        Math <br/>
                        English <br/>
                        Science <br/>
                    </p>
                </div>
                <div className = "footer-col">
                    <h2>TERMS OF SERVICE</h2>
                    <p>
                        Privacy-Policy
                    </p>
                </div>
            </div>
            <div className = "footer_row">
                <div className = "footer-col2">
                    <p>
                        Copyright : ⓒFOXMON-STUDY
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;