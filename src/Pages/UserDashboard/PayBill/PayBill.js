import React from "react";
import img from "../../../Assets/images/sad.png";

const PayBill = () => {
    return (
        <div>
            <div className="text-center">
                <div className="container my-5">
                    <h1 className="hed-color">Payment system coming soon!</h1>
                    <div>
                        <img
                            src={img}
                            className="p-5 notFound-img img-fluid"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayBill;
