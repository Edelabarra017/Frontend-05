import { Link } from "react-router-dom";


const PaymentMethods = () => {


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link className="product-link" to={"/"}>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Medio de pagos</li>
                            </ol>
                        </nav>
                    </div>



                    <div className="col-md-12 mt-5">

                        <h3>DOGCITY</h3>


                        En <b>Dogcity</b>, Valoramos tu comodidad y seguridad en cada transacción. Por ello, te ofrecemos PayPal como una opción de pago confiable y conveniente. Con PayPal, puedes realizar tus compras de forma segura utilizando tu cuenta de PayPal o tu tarjeta de crédito, garantizándote tranquilidad y protección adicional. Elige PayPal durante el proceso de compra y experimenta la facilidad y confianza que proporciona uno de los métodos de pago más reconocidos a nivel mundial.
                        <br /><br />
                         <b>Beneficios de Pagar con PayPal:</b>
                        <br />
                        <ul>
                            <li>
                                <b>Seguridad Asegurada:</b> PayPal utiliza avanzadas medidas de seguridad para proteger tu información financiera, brindándote tranquilidad en cada transacción.
                            </li>
                            <li>
                                <b>Flexibilidad de Pago:</b> Paga con tu cuenta de PayPal o con tarjetas de crédito/débito vinculadas. PayPal te da la flexibilidad que necesitas para realizar tus compras.
                            </li>
                            <li>
                                <b>Protección al Comprador:</b> Disfruta de la Protección al Comprador de PayPal, que te brinda cobertura en caso de disputas o problemas con tu compra.
                            </li>
                            <li>
                                <b>Compra con confianza y Tranquilidad en Dogcity nosotros te cuidamos.</b>
                            </li>
                        </ul>


                    </div>



                </div>
            </div>
        </>
    );
};



export default PaymentMethods;