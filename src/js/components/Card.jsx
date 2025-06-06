import React from "react";

const Card = (e) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 ">
            <div className="col">
                <div className="card h-100">
                    <img src="https://fastly.picsum.photos/id/933/200/151.jpg?hmac=hPXIXtuqnjeTisF6-O0jJoEGHd6QBvZfuGF4RINy44I" className="card-img-top" alt="..."/>
                    <div className="card-body px-0 pb-0 text-center d-flex flex-column justify-content-between">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="bg-light text-center border-top">
                            <button className="btn btn-primary m-3 ">Go somewhere</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="https://fastly.picsum.photos/id/33/200/151.jpg?hmac=f4alxCMIDuzPLFAYHbDNSoouV0nKNi0lNaCCNn9RnRY" className="card-img-top" alt="..."/>
                    <div className="card-body px-0 pb-0 text-center d-flex flex-column justify-content-between">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text px-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="bg-light text-center border-top">
                            <button className="btn btn-primary m-3 ">Go somewhere</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="https://fastly.picsum.photos/id/989/200/151.jpg?hmac=KQ7xPjg9ZebKM4xzygzH2VsrDwRrKI54RINhR7NUBVA" className="card-img-top" alt="..."/>
                    <div className="card-body text-center px-0 pb-0 d-flex flex-column justify-content-between">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div className="bg-light text-center border-top">
                            <button className="btn btn-primary m-3 ">Go somewhere</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;