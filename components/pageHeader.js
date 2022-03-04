import React from 'react'

const pageHeader = (props) => {
    return (
        <div className={props.bgclass ? `page_header ${props.bgclass}` : 'page_header page_header_bg '}>
            <h3>{props.title}</h3>
            {props.children}
        </div>
    )
}

export default pageHeader
