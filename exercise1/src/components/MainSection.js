import React from 'react'
import styles from './MainSection.module.css';

export default function MainSection() {
    return (
       <table className = { styles.mainwindow }>
           <tr>
                <td>
                    <div  className = { styles.header } >Uutiset</div> <br/>
                    <div> <img src = "https://www.usnews.com/dims4/USNEWS/85cf3cc/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd8%2F17%2F754293f84bc69ddfbffaa5793cae%2F190411-stockmarket-stock.jpg"></img></div>
                    <div className = { styles.header2 }>Bitcoinin arvo romahti - omistajille massiiviset tappiot</div><br/><br/>
                </td>

                <td Rowspan = "2" className = { styles.sidebarcontainer } > 
                    <div className = { styles.sidebarheader }>Luetuimmat </div> <br/>
                     1. [Luetuimman uutisen otsikko] <br/> <img src = "https://d1mwzmktacfw26.cloudfront.net/wp-content/uploads/2016/04/23105511/Frontier-400x200.jpg"></img><br/>
                     2. [2. luetuimman uutisen otsikko] <br/> <img src = "https://digital.ihg.com/is/image/ihg/ihg-trip-ideas-lp-home-featured-nyc-400x200"></img> <br/>
                     3. [3. luetuimman uutisen otsikko] <br/> <img src = "https://digital.ihg.com/is/image/ihg/ihg-trip-ideas-lp-home-outdoor-400x200"></img> <br/>
                  
                </td>
            </tr>
            <tr>
                <div className = { styles.header2 }>
                <img src = "https://www.ampner.com/wp-content/uploads/2021/05/Revontulia-ja-vuorenhuippuja-640x420.jpeg"></img><br/>
                Suomen lappi on nyt lomailijoiden suosiossa - katso täältä suosituimmat lomakohteet
                </div>

            </tr>
            
       </table>
       

        
            
        
    
        
    )
    
}
