import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({children}) => {
    return (
        <div style={{
            width: "100%", 
            display: 'inline-flex',
            justifyContent: "center",
            alignItems: 'center',
        }}>
            {children}
        </div>
    );
};

const Carousel = ({children, transform}) => {

    // const handlers = useSwipeable({
    //     onSwipedLeft: ()=>nextImg,
    //     onSwipedRight: ()=>prevImg
    // });

    return (
        // <div {...handlers} style={{
        <div style={{
            width: '100%',
            overflow: 'hidden',
        }}>
            <div style={{
                whiteSpace: 'nowrap',
                transform: transform,
                transition: 'transform 0.3s',
            }}>
                {children}
            </div>
        </div>
    );
};

export default Carousel;