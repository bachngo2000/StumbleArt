import AttributeCard from "../Attribute Card/AttributeCard";
import "./DiscoverCard.css";

const DiscoverCard = ({name, attributes, onSubmit}) => {
    return (
        <div className="discover-card"> 
            <h2> Discover prestigious collections from the Harvard Art Museums! </h2>
            <h2> {name} </h2>
            <div className="attribute-list">
                { attributes && attributes.map((attribute, index) => (
                    <AttributeCard key={index} art_attribute={attribute}/>
                ))}
            </div>
            <button type="submit" className="button" onClick={onSubmit}>
                Discover! 🔥
            </button>
        </div>
    );
};

export default DiscoverCard;