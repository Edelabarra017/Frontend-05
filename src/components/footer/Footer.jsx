import "./footer.css";

const Footer = () => {

    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer__title">Datos de contacto</div>
                            <ul className="footer_list">
                                <li>
                                    Dogcity@gmail.com
                                </li>
                                <li>
                                    +569 87530307
                                </li>
                                <li>
                                Av. Las Condes 9765, Las Condes, Región Metropolitana 
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-4">
                            <div className="footer__title">Redes sociales</div>
                            <ul className="rrss">
                                <li>
                                    <a href="#">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="footer__title">Centro de ayuda</div>
                            <ul className="footer_list">
                                <li>
                                    <a href="/medios-de-pagos">Medios de pagos</a>
                                </li>
                                <li>
                                    <a href="/garantia-del-producto">Garantía de producto</a>
                                </li>
                                <li>
                                    <a href="/terminos-condiciones">Terminos y condiciones</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;