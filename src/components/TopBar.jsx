import './styles/TopBar.scss'
import { PAGES } from '../const.js';

import Button from './Button';

export function TopBar({ selected , setSelected }) {
    
    return <div className="topbar">
        <div className="title">
            <div className="mail"></div>
        </div>
        <div className="menu">
            {PAGES.map((text, index) => index != 0 && <Button key={index} text={text} selected={selected === index} onClick={() => setSelected(index)} />)}
        </div>
        <div className="line" />
    </div>;
}