import './html.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Title=()=>{

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top ">
                <div className="container-fluid">
                    <a className="navbar-brand col-md-5" href="#">
                        <img src="main-logo (1).png" alt="Your Logo" className="img-fluid" />
                    </a>
                    <div className="col-md-4 text-center col-lg-4">
                        <span className="text-success font-weight-bold responsive-font fs-4" style={{ fontWeight: 'bold', fontSize: '1rem' }}>Name: Dr. Arjun Rajput</span>
                    </div>
                    <div className="col-md-2 text-center">
                        <span className="text-success font-weight-bold fs-4">ID: 6064</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="btn btn-outline-danger border-danger" href="#">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default  Title;