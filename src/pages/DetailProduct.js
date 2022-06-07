import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import convertRupiah from 'rupiah-format';
import Navbar from '../components/Navbar';
import { useQuery, useMutation } from 'react-query';
import { API } from '../config/api';

export default function DetailProduct() {
  let navigate = useNavigate();
  let api = API();

  const [ product, setProduct] = useState({}); 


  const { id } = useParams();
  const getProduct = async () => {
    try {
      const response = await API.get('/product/' + id);
      setProduct(response.data.data);
    } catch (error) {
      console.log(error)
    }
  }

  // Create config Snap payment page with useEffect here ...
  useEffect(() => {
    getProduct ();

    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-j87FM_ValTqZ0pQV";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  // const handleBuy = useMutation(async () => {
  //   try {
  //     // Get data from product
  //     const data = {
  //       idProduct: product.id,
  //       idSeller: product.user.id,
  //       price: product.price,
  //     };

  //     // Data body
  //     const body = JSON.stringify(data);

  //     // Configuration
  //     const config = {
  //       method: "POST",
  //       headers: {
  //         Authorization: "Basic " + localStorage.token,
  //         "Content-type": "application/json",
  //       },
  //       body,
  //     };

  //     // Insert transaction data
  //     const response = await API.post("/transaction", body , config);
  //     console.log(response);

  //     // Create variabel for store token payment from response here ...
  //     const token = response.payment.token;

  //     // Init Snap for display payment page with token here ...
  //     window.snap.pay(token, {
  //       onSuccess: function (result) {
  //         /* You may add your own implementation here */
  //         console.log(result);
  //         navigate("/profile");
  //       },
  //       onPending: function (result) {
  //         /* You may add your own implementation here */
  //         console.log(result);
  //         navigate("/profile");
  //       },
  //       onError: function (result) {
  //         /* You may add your own implementation here */
  //         console.log(result);
  //       },
  //       onClose: function () {
  //         /* You may add your own implementation here */
  //         alert("you closed the popup without finishing the payment");
  //       },
  //     });

  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  const handleBuy = async () => {
    try {
      // Get data from product
      const data = {
        idProduct: product.id,
        idSeller: product.user.id,
        price: product.price,
      };

      const body = JSON.stringify(data);

      // Configuration
      const config = {
        headers: {
          Authorization: "Basic " + localStorage.token,
          "Content-type": "application/json",
        },
      };

      // Insert transaction data
      const response = await API.post("/transaction", body, config);
      console.log("Response Transaction: ", response.data);

      // Create variabel for store token payment from response
      const token = response.data.payment.token;

      // Modify handle buy to display Snap payment page
      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/profile");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/profile");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <Container className="py-5">
        <Row>
          <Col md="2"></Col>
          <Col md="3">
            <img src={product?.image} className="img-fluid" />
          </Col>
          <Col md="5">
            <div className="text-header-product-detail">{product?.name}</div>
            <div className="text-content-product-detail">
              Stock : {product?.qty}
            </div>
            <p className="text-content-product-detail mt-4">{product?.desc}</p>
            <div className="text-price-product-detail text-end mt-4">
              {convertRupiah.convert(product?.price)}
            </div>
            <div className="d-grid gap-2 mt-5">
              <button
                onClick={handleBuy}
                className="btn btn-buy"
              >
                Buy
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}