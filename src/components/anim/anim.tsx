import React, {FC, useEffect, useState} from 'react';

interface AnimProps {
    component: React.ReactNode;
    location: Location
    displayLocation: Location;
    setDisplayLocation: React.Dispatch<React.SetStateAction<Location>>
}

const Anim:FC<AnimProps> = ({component, displayLocation, setDisplayLocation, location}) => {
    // const location = useLocation();

    // const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransitionStage("fadeOut");
    }, [location, displayLocation]);

    return (
        <div
            className={`classes.${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                    setTransitionStage("fadeIn");
                    setDisplayLocation(location);
                }
            }}>
            {component}
        </div>
    );
};

export default Anim;