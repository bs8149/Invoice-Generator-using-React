import { Button, Checkbox, Container } from "@mui/material";
import React, { useState } from "react";
import { toWords } from "number-to-words";

const InvoiceForm = () => {
  const [invoiceData, setInvoiceData] = useState({
    sellerDetails: {
      name: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      panNo: "",
      gstNo: "",
      placeOfSupply: "",
    },

    billingDetails: {
      name: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      stateCode: "",
    },
    shippingDetails: {
      name: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      stateCode: "",
      placeOfDelivery: "",
    },

    orderDetails: { orderNo: "", orderDate: "" },
    invoiceDetails: {
      invoiceNo: "",
      invoiceDate: "",
      reverseCharge: false,
      invoice: "",
    },
    items: [
      { description: "", unitPrice: 0, quantity: 0, discount: 0, taxRate: 18 },
    ],
    signatureImage: "",
  });
  const [generatedInvoice, setGeneratedInvoice] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [category, field] = name.split(".");
    setInvoiceData((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: value,
      },
    }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const items = [...invoiceData.items];
    items[index][name] = value;
    setInvoiceData((prevState) => ({
      ...prevState,
      items: items,
    }));
  };

  const addItem = () => {
    setInvoiceData((prevState) => ({
      ...prevState,
      items: [
        ...prevState.items,
        {
          description: "",
          unitPrice: 0,
          quantity: 0,
          discount: 0,
          taxRate: 18,
        },
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getTotalTaxAmount = () => {
    return invoiceData.items
      .reduce((total, item) => {
        const netAmount = item.unitPrice * item.quantity - item.discount;
        const taxAmount = (netAmount * (item.taxRate || 18)) / 100;
        return total + taxAmount;
      }, 0)
      .toFixed(2);
  };

  const getTotalAmountPayable = () => {
    return invoiceData.items
      .reduce((total, item) => {
        const netAmount = item.unitPrice * item.quantity - item.discount;
        const totalAmount = netAmount * (1 + (item.taxRate || 18) / 100);
        return total + totalAmount;
      }, 0)
      .toFixed(2);
  };

  const amountInWords = toWords(parseFloat(getTotalAmountPayable()));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create Invoice</h2>
        {/* Seller Details */}
        <label>Seller Details</label>
        <input
          type="text"
          name="sellerDetails.name"
          placeholder="Name"
          value={invoiceData.sellerDetails.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sellerDetails.address"
          placeholder="Address"
          value={invoiceData.sellerDetails.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sellerDetails.city"
          placeholder="City"
          value={invoiceData.sellerDetails.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sellerDetails.state"
          placeholder="State"
          value={invoiceData.sellerDetails.state}
          onChange={handleChange}
        />
        <input
          type="number"
          name="sellerDetails.pincode"
          placeholder="Pincode"
          value={invoiceData.sellerDetails.pincode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sellerDetails.panNo"
          placeholder="PAN No."
          value={invoiceData.sellerDetails.panNo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sellerDetails.gstNo"
          placeholder="GST Registration No."
          value={invoiceData.sellerDetails.gstNo}
          onChange={handleChange}
        />

        {/* Place of Supply */}
        <label>Place of Supply</label>
        <input
          type="text"
          name="sellerDetails.placeOfSupply"
          placeholder="Place of Supply"
          value={invoiceData.sellerDetails.placeOfSupply}
          onChange={handleChange}
        />

        {/* Billing Details */}
        <label>Billing Details</label>
        <input
          type="text"
          name="billingDetails.name"
          placeholder="Name"
          value={invoiceData.billingDetails.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="billingDetails.address"
          placeholder="Address"
          value={invoiceData.billingDetails.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="billingDetails.city"
          placeholder="City"
          value={invoiceData.billingDetails.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="billingDetails.state"
          placeholder="State"
          value={invoiceData.billingDetails.state}
          onChange={handleChange}
        />
        <input
          type="number"
          name="billingDetails.pincode"
          placeholder="Pincode"
          value={invoiceData.billingDetails.pincode}
          onChange={handleChange}
        />
        <input
          type="number"
          name="billingDetails.stateCode"
          placeholder="State/UT Code"
          value={invoiceData.billingDetails.stateCode}
          onChange={handleChange}
        />

        {/* Shipping Details */}
        <label>Shipping Details</label>
        <input
          type="text"
          name="shippingDetails.name"
          placeholder="Name"
          value={invoiceData.shippingDetails.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="shippingDetails.address"
          placeholder="Address"
          value={invoiceData.shippingDetails.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="shippingDetails.city"
          placeholder="City"
          value={invoiceData.shippingDetails.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="shippingDetails.state"
          placeholder="State"
          value={invoiceData.shippingDetails.state}
          onChange={handleChange}
        />
        <input
          type="number"
          name="shippingDetails.pincode"
          placeholder="Pincode"
          value={invoiceData.shippingDetails.pincode}
          onChange={handleChange}
        />
        <input
          type="number"
          name="shippingDetails.stateCode"
          placeholder="State/UT Code"
          value={invoiceData.shippingDetails.stateCode}
          onChange={handleChange}
        />

        {/* Place of Delivery */}
        <label>Place of Delivery</label>
        <input
          type="text"
          name="shippingDetails.placeOfDelivery"
          placeholder="Place of Delivery"
          value={invoiceData.shippingDetails.placeOfDelivery}
          onChange={handleChange}
        />

        {/* Order Details */}
        <label>Order Details</label>
        <input
          type="text"
          name="orderDetails.orderNo"
          placeholder="Order No."
          value={invoiceData.orderDetails.orderNo}
          onChange={handleChange}
        />
        <input
          type="date"
          name="orderDetails.orderDate"
          placeholder="Order Date"
          value={invoiceData.orderDetails.orderDate}
          onChange={handleChange}
        />

        {/* Invoice Details */}
        <label>Invoice Details</label>
        <input
          type="text"
          name="invoiceDetails.invoiceNo"
          placeholder="Invoice No."
          value={invoiceData.invoiceDetails.invoiceNo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="invoiceDetails.invoice"
          placeholder="Invoice Details"
          value={invoiceData.invoiceDetails.invoice}
          onChange={handleChange}
        />
        <input
          type="date"
          name="invoiceDetails.invoiceDate"
          placeholder="Invoice Date"
          value={invoiceData.invoiceDetails.invoiceDate}
          onChange={handleChange}
        />
        <label>
          <Checkbox
            name="invoiceDetails.reverseCharge"
            checked={invoiceData.invoiceDetails.reverseCharge}
            onChange={() =>
              setInvoiceData((prevState) => ({
                ...prevState,
                invoiceDetails: {
                  ...prevState.invoiceDetails,
                  reverseCharge: !prevState.invoiceDetails.reverseCharge,
                },
              }))
            }
          />
          Reverse Charge <br />
        </label>

        {/* Items */}
        <label>Items</label>
        {invoiceData.items.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={item.description}
              onChange={(e) => handleItemChange(index, e)}
            />
            <label>Unit Price</label>
            <input
              type="number"
              name="unitPrice"
              placeholder="Unit Price"
              value={item.unitPrice}
              onChange={(e) => handleItemChange(index, e)}
            />
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, e)}
            />
            <label>Discount</label>
            <input
              type="number"
              name="discount"
              placeholder="Discount"
              value={item.discount}
              onChange={(e) => handleItemChange(index, e)}
            />
          </div>
        ))}
        <Button
          variant="contained"
          color="info"
          type="button"
          onClick={addItem}
        >
          Add Item
        </Button>

        {/* Signature Image */}
        <label>
          {" "}
          <br /> Signature Image
        </label>
        <input
          type="file"
          name="signatureImage"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setInvoiceData((prevState) => ({
                  ...prevState,
                  signatureImage: reader.result,
                }));
              };
              reader.readAsDataURL(file);
            }
          }}
        />

        <Button type="submit" variant="contained" color="success">
          Generate Invoice
        </Button>
      </form>
      <Container>
        <h2 style={{textAlign: 'center'}}>Generated Invoice</h2>
        <div>
          <div className="invoice-container">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <img src="" alt="Logo" />
              <div style={{ textAlign: "end" }}>
                <h4 style={{ lineHeight: 0 }}>
                  Tax Invoice/Bill of Supply/Cash Memo
                </h4>
                <p style={{ lineHeight: 0 }}>(Original for Recipient)</p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h4>Sold By</h4>
                <p>{invoiceData.sellerDetails.name}</p>
                <p>{invoiceData.sellerDetails.address}</p>
                <p>
                  {invoiceData.sellerDetails.city},{" "}
                  {invoiceData.sellerDetails.state},{" "}
                  {invoiceData.sellerDetails.pincode}
                </p>
                <p>IN</p>
                <p>PAN No.: {invoiceData.sellerDetails.panNo}</p>
                <p>GST Registration No.: {invoiceData.sellerDetails.gstNo}</p>
              </div>
              <div style={{ textAlign: "end" }}>
                <div>
                  <h4>Billing Address</h4>
                  <p>{invoiceData.billingDetails.name}</p>
                  <p>{invoiceData.billingDetails.address}</p>
                  <p>
                    {invoiceData.billingDetails.city},{" "}
                    {invoiceData.billingDetails.state},{" "}
                    {invoiceData.billingDetails.pincode}
                  </p>
                  <p>IN</p>
                  <p><span style={{fontWeight: 'bold'}}>State/UT Code:</span> {invoiceData.billingDetails.stateCode}</p>
                </div>
                <div>
                  <h4>Shipping Address</h4>
                  <p>{invoiceData.shippingDetails.name}</p>
                  <p>{invoiceData.shippingDetails.address}</p>
                  <p>
                    {invoiceData.shippingDetails.city},{" "}
                    {invoiceData.shippingDetails.state},{" "}
                    {invoiceData.shippingDetails.pincode}
                  </p>
                  <p>IN</p>
                  <p><span style={{fontWeight: 'bold'}}>State/UT Code:</span> {invoiceData.shippingDetails.stateCode}</p>
                </div>
                <div>
                  <p><span style={{fontWeight: 'bold'}}>Place of Supply:</span> {invoiceData.sellerDetails.placeOfSupply}</p>
                </div>

                <div>
                  <p><span style={{fontWeight: 'bold'}}>Place of Delivery:</span> {invoiceData.shippingDetails.placeOfDelivery}</p>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p><span style={{fontWeight: 'bold'}}>Order Number:</span> {invoiceData.orderDetails.orderNo}</p>
                <p><span style={{fontWeight: 'bold'}}>Order Date:</span> {invoiceData.orderDetails.orderDate}</p>
              </div>
              <div>
                <p><span style={{fontWeight: 'bold'}}>Invoice Number:</span> {invoiceData.invoiceDetails.invoiceNo}</p>
                <p><span style={{fontWeight: 'bold'}}>Invoice Details:</span> {invoiceData.invoiceDetails.invoice}</p>
                <p><span style={{fontWeight: 'bold'}}>Invoice Date:</span> {invoiceData.invoiceDetails.invoiceDate}</p>
              </div>
            </div>

            <div>
              <h2>Items</h2>
              <table className="invoice-table">
                <thead>
                  <tr>
                    <th>Sr.No.</th>
                    <th style={{ width: "50%" }}>Description</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Discount</th>
                    <th>Net Amount</th>
                    <th>Tax Rate</th>
                    <th>Tax Amount</th>
                    <th>Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData.items.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.description}</td>
                      <td>₹{item.unitPrice}</td>
                      <td>{item.quantity}</td>
                      <td>{item.discount}%</td>
                      <td>₹{item.unitPrice * item.quantity - (item.unitPrice * item.quantity/item.discount)}</td>
                      <td>{item.taxRate || 18}%</td>
                      <td>
                        ₹
                        {(
                          ((item.unitPrice * item.quantity - (item.unitPrice * item.quantity/item.discount)) *
                            (item.taxRate || 18)) /
                          100
                        ).toFixed(2)}
                      </td>
                      <td>
                        ₹
                        {(
                          (item.unitPrice * item.quantity - item.discount) *
                          (1 + (item.taxRate || 18) / 100)
                        ).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="7" style={{fontWeight: 'bold'}}>Total Tax Amount:</td>
                    <td colSpan="1">₹{getTotalTaxAmount()}</td>
                    <td colSpan="2">₹{getTotalAmountPayable()}</td>
                  </tr>
                  <tr>
                    <td colSpan="10" style={{fontWeight: 'bold'}}>
                      Amount in Words: <br /> {amountInWords}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="10" style={{ textAlign: "end", fontWeight: 'bold' }}>
                      For {invoiceData.sellerDetails.name}: <br />
                      {invoiceData.signatureImage ? (
                        <img
                          src={invoiceData.signatureImage}
                          alt="Signature"
                          width={"100px"}
                          height={"50px"}
                        />
                      ) : (
                        ""
                      )}
                      <p style={{fontWeight: 'bold'}}>Authorised Signatory</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Whether tax is payable under reverse charge -{" "}
                {invoiceData.invoiceDetails.reverseCharge ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default InvoiceForm;
