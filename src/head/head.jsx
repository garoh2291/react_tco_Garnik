import './head.css'


export function Stars(props){
    return (
        <div className="head-stars">
            <i className={`${props.class} bx bxs-star`}></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i className={`${props.class} bx bxs-star`}></i>
        </div>
    )
}