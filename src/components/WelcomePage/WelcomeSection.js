import React from 'react';
import PropTypes from 'prop-types';

const renderImage = (image, header) => (
    <div className="image-section">
        <img src={ image } alt={ header }/>
    </div>
);

const WelcomeSectionComponent = ({ header, text, image, textPlacement, sectionNo }) => (
    <div className={ `welcome-page-section ${sectionNo}-section` }>
        <div className={ `welcome-page-row ${textPlacement}` }>
            { textPlacement === "right" && renderImage(image, header) }
            <div className="details">
                <h4>{ header }</h4>
                <p>{ text }</p>
            </div>
            { textPlacement === "left" && renderImage(image, header) }
        </div>
    </div>
);

WelcomeSectionComponent.propTypes = {
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    textPlacement: PropTypes.oneOf(['left', 'right']).isRequired,
    sectionNo: PropTypes.string.isRequired
}

export default WelcomeSectionComponent;
