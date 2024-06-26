import { useRef } from "react";
import logo from "./assets/amazon-logo.png";
import signature from "./assets/amazon-logo.png";
import ReactToPrint from "react-to-print";
import Invoice from "./compunent/invoice";

const App = () => {
  const invoiceRef = useRef();

  const data = {
    companyLogo: logo,
    sellerDetails: {
      name: "Varasiddhi Silk Exports",
      address: "75, 3rd Cross, Lalbagh Road, BENGALURU, KARNATAKA, 560027, IN",
      pan: "AACFV3325K",
      gst: "29AACFV3325K1ZY",
    },
    billingDetails: {
      name: "Madhu B",
      address:
        "Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum, Lakshminarayana Pura, AECS Layout, BENGALURU, KARNATAKA, 560037, IN",
      stateCode: "29",
    },
    shippingDetails: {
      name: "Madhu B",
      address:
        "Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum, Lakshminarayana Pura, AECS Layout, BENGALURU, KARNATAKA, 560037, IN",
      stateCode: "29",
    },
    orderDetails: {
      orderNo: "403-3225714-7676307",
      orderDate: "28.10.2019",
    },
    invoiceDetails: {
      invoiceNo: "KA-310565025-1920",
      invoiceDate: "28.10.2019",
      reverseCharge: false,
    },
    items: [
      {
        description:
          "Varasiddhi Silks Men's Formal Shirt (SH-05-42, Navy Blue, 42)",
        unitPrice: 338.1,
        quantity: 1,
        discount: 0,
        taxRate: 18,
      },
      {
        description:
          "Varasiddhi Silks Men's Formal Shirt (SH-05-40, Navy Blue, 40)",
        unitPrice: 338.1,
        quantity: 1,
        discount: 0,
        taxRate: 18,
      },
      {
        description: "Shipping Charges",
        unitPrice: 30.96,
        quantity: 1,
        discount: 0,
        taxRate: 18,
      },
    ],
    signatureImage: signature,
  };

  return (
    <div className="App text-center">
      <Invoice ref={invoiceRef} {...data} />
      <ReactToPrint
        trigger={() => (
          <button className="mt-4 p-2 bg-green-600 text-white rounded-md mb-10">
            Print Invoice
          </button>
        )}
        content={() => invoiceRef.current}
      />
    </div>
  );
};

export default App;
