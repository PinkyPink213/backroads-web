import React from 'react'
import { pageLinks, socialLinks } from '../data'
function Footer() {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {
                    pageLinks.map((link) => {
                        const { id, href, text } = link
                        return (
                            <li key={id}>
                                <a href={href} className="nav-link">{text}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="footer-icons">
                {
                    socialLinks.map((socialink) => {
                        const { id, href, icon } = socialink
                        return (
                            <li key={id}>
                                <a href={href} target="_blank" className="nav-icon" rel="noreferrer"><i className={icon}></i ></a>
                            </li>
                        )
                    })
                }
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    )
}

export default Footer
