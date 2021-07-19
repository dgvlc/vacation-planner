import React from 'react'
import "./Footer.css"
// npm install --save-dev @iconify/react @iconify-icons/logos
import { Icon, InlineIcon } from '@iconify/react';
import githubIcon from '@iconify-icons/logos/github-icon'         
import { Link } from 'react-router-dom';




export default function Footer() {
  return (
    <div className="footer-box">
    <Link to="https://github.com/dgvlc">
        <Icon icon={githubIcon} />
    </Link>
    </div>
  )
}
