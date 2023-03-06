import React from "react";

const Single = () => {
    return (
        <div className="single">
                        <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage600x700.jpg" alt="..." /></div>
                        <div className="col-md-6">
                            <div className="small mb-1">SKU: BST-498</div>
                            <h1 className="display-5 fw-bolder">Shop item template</h1>
                            <div className="fs-5 mb-5">
                                <span className="text-decoration-line-through">$45.00</span>
                                <span>$40.00</span>
                            </div>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                            <div className="d-flex">
                                <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" />
                                <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                    <i className="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-5 bg-light">
                <div className="container px-4 px-lg-5 mt-5">
                    <h2 className="fw-bolder mb-4">Related products</h2>
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">
                               
                                <img className="card-img-top" src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg" alt="..." />
                               
                                <div className="card-body p-4">
                                    <div className="text-center">
                                       
                                        <a  ><h5 className="fw-bolder">Fancy Product</h5></a>
                                        
                                        $40.00 - $80.00
                                    </div>
                                </div>
                               
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                               
                                <img className="card-img-top" src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg" alt="..." />
                               
                                <div className="card-body p-4">
                                    <div className="text-center">
                                       
                                        <a  ><h5 className="fw-bolder">Fancy Product</h5></a>
                                        
                                        $40.00 - $80.00
                                    </div>
                                </div>
                               
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                               
                                <img className="card-img-top" src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg" alt="..." />
                               
                                <div className="card-body p-4">
                                    <div className="text-center">
                                       
                                        <a  ><h5 className="fw-bolder">Fancy Product</h5></a>
                                        
                                        $40.00 - $80.00
                                    </div>
                                </div>
                               
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                               
                                <img className="card-img-top" src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg" alt="..." />
                               
                                <div className="card-body p-4">
                                    <div className="text-center">
                                       
                                        <a  ><h5 className="fw-bolder">Fancy Product</h5></a>
                                        
                                        $40.00 - $80.00
                                    </div>
                                </div>
                               
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Single;