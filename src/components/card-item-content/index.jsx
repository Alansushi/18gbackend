// import Content from "./content";

export default function CardItemContent({
//    firstName,
//    lastName
contenido,
titulo
    
}){
    return(
        <div className="card-item-content">
             <p className="title">{titulo}</p>
            <p className="content">
                {contenido}
            </p>
        </div>
    )
}