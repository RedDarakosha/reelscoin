import {useState} from "react"

export function Balance() {

    let {amount} = useState(0, 1)

    // let {amount, setAmount} = useState(0, (prev) => {
    
    // })


    return (
        <div className="balance header-element">
            <i className="balance-icon"></i>
            <span className="balance-amount">0</span>
        </div>
    )
}