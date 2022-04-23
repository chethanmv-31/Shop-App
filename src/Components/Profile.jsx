import React from 'react'

function Profile() {
    return (

        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'>Profile</h1>
                    <hr />

                </div>

                <div className="col-12 mb-5" >

                    <div className="card" style={{
                        width: "18rem",
                        position: "absolute",
                        left: " 50%",
                        top: "68%",
                        transform: "translate(-50%, -50%)",
                    }}>
                        <img src="../pngwing.com.png" alt="avatar" style={{ width: "10rem", padding: "1rem", marginLeft: "4rem" }} />
                        <div className="card-body">
                            <h4>Chethan M V</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor obcaecati fugit qui porro odit doloribus ut aspernatur nulla ab, nesciunt est iusto temporibus in modi, harum earum nemo consequatur cupiditate.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Profile