import React from "react";
import { onLoad } from "../Animation";

function Footer() {
    
    return (
        <>
            <div id="footer-area" className="w-full" >
                <div className="bg-slate-900 py-[4%] relative">
                    <div id="footer-texts" className="grid grid-cols-3 text-center gap-y-5 text-slate-100">
                        <div>
                            <a href="#">Home</a>
                        </div>
                        <div>
                            <a href="#">Contact Us</a>
                        </div>
                        <div>
                            <a href="#">Privacy policy</a>
                        </div>
                        <div>
                            <a href="#">Terms of Service</a>
                        </div>
                        <div>
                            <a href="#">FAQ's</a>
                        </div>
                        <div>
                            <a href="#">Help & Support</a>
                        </div>
                    </div>
                </div>
                <div className="text-center w-full font-bold bg-black text-white p-2">
                    <p id="copyright-message">Copyright &#169;2024 Mohit Kumar Pramanik</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
