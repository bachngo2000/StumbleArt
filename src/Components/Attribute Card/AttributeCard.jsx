import "./AttributeCard.css";

const AttributeCard = (art_attribute) => {
    return (
        <button className="attribute-card">
            {art_attribute}
        </button>

    );
};

export default AttributeCard;