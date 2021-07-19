import React from 'react'
import "./Footer.css"
// npm install --save-dev @iconify/react @iconify-icons/logos
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/logos/github-icon'         




export default function Footer() {
  return (
    <div className="footer-box">
    <a  className="social-link" href="https://github.com/dgvlc">
        <Icon className="icon" icon={githubIcon} />
    </a>
    </div>
  )
}
