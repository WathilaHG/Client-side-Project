export function FavouritesPanel({favourites, onRemove, onClear, onDropId}){
    const handleDrop = (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        if(id){
            onDropId(id);
        } 
    };

    const handleDragOver = (e) => {
        e.preventDefault();  
    };

    const handleFavouriteDragStart = (e, id) => {
        e.dataTransfer.setData("text/plain", id);
        e.dataTransfer.effectAllowed = "move";
    };

    const handleFavouriteDragEnd = (e , id) => {
        const dropTarget = document.elementFromPoint(e.clientX, e.clientY);

        if(!dropTarget || !dropTarget.closest(".favourites-panel")){
            onRemove(id);
        }
    };

    return(
        <aside
            className="favourites-panel"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <div className="favourites-header">
                <h2>Favourites</h2>
                <button type="button" onClick={onClear}>
                    Clear
                </button>
            </div>
            {favourites.length===0 && <p>No Favourites yet</p>}

            <ul className="favourites-list">
                {favourites.map((p) => (
                    <li
                        key={p.id}
                        className="favourites-item"
                        draggable
                        onDragStart = {(e) => handleFavouriteDragStart(e, p.id)}
                        onDragEnd ={(e) => handleFavouriteDragEnd(e, p.id)}
                    >
                        <span>
                            £{p.price.toLocaleString()} - {p.bedrooms} bed {p.type}
                        </span>
                        <button type="button" onClick={() => onRemove(p.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    )
}