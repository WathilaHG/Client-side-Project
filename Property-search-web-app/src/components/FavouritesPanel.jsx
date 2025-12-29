// Sidebar panel for managing favourite properties with drag-and-drop functionality
import "./FavouritesPanel.css";

export function FavouritesPanel({favourites, onRemove, onClear, onDropId}){
    // Handle dropping properties into favourites panel
    const handleDrop = (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        if(id){
            onDropId(id);
        } 
    };

    // Allow drop events
    const handleDragOver = (e) => {
        e.preventDefault();  
    };

    // Handle dragging favourites within the panel
    const handleFavouriteDragStart = (e, id) => {
        e.dataTransfer.setData("text/plain", id);
        e.dataTransfer.effectAllowed = "move";
    };

    // Remove favourite if dragged outside the panel
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
                {/* Clear all favourites button */}
                <button type="button" onClick={onClear}>
                    Clear
                </button>
            </div>

            {/* Show message if no favourites */}
            {favourites.length===0 && <p>No Favourites yet</p>}

            <ul className="favourites-list">
                {/* Render each favourite property */}
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
                        {/* Remove individual favourite */}
                        <button type="button" onClick={() => onRemove(p.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    )
}