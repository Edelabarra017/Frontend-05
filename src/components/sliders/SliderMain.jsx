import { Carousel } from "react-bootstrap";

const SliderMain = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img src="banner-1.jpg" className="d-block w-100"></img>
                <Carousel.Caption>
                    <p>Sabores irresistibles y juguetes divertidos, descubre nuestra exclusiva selección para alegrar a tu mascota.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="banner-2.jpg" className="d-block w-100"></img>
                <Carousel.Caption>
                    <p>Nutrición premium y juguetes divertidos, porque tus mascotas merecen lo mejor.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="banner-3.jpg" className="d-block w-100"></img>
                <Carousel.Caption>
                    <p>
                    Bienvenido a la tienda donde los animales son la prioridad, Cuidado en cada bocado, alegría en cada juego. 
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default SliderMain;