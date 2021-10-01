import React from 'react';
import styles from './Header.module.css';


export default function Header() {
    return (

        <div className = { styles.headerBackground }>
            <div className = { styles.container }>Raakalaiset.fi</div> <br/>
            <div className = { styles.searchBar }>Search Bar: (search by name, brand, color or weight)</div>
        </div>
    )
}
