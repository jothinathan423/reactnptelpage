import authenticate from "./validate";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './html.css'

const Pro=()=>{
    return (
        <>
        <div className="" style={{backgroundColor:'#e6f7ff'}}>
            <div className="container align-self-center pt-5 pe-5 col-10 pb-5 bg-light col-xxl-5 col-xl-6 col-lg-7 col-md-8 my-3  rounded-4 col-5 shadow-lg" style={{ backgroundColor: 'white' }}>
                <h1>EVENT PROPOSAL</h1>
                <br />
                <label htmlFor="">Sub type</label><br />
                <select  name="" className="form-select" id="">
                    <option value="">NPTEL CERTIFICATION</option>
                </select>
                <br />
                <h3>NPTEL CERTIFICATION</h3><br />
                <form name="signup" onSubmit={() => authenticate}>
                    <label htmlFor="">Academic Year </label><br />
                    <select name="academic" className="form-select">
                        <option value="">Select the Academic Year</option>
                        <option value="2022-2023">2022-2023</option>
                        <option value="2023-2024">2023-2024</option>
                    </select>
                    <span className="text-danger" id="errselectone"></span><br />
                    <label htmlFor="">Semester</label><br />
                    <select name="semester" className="form-select" id="">
                        <option value="">Select the Semester</option>
                        <option value="odd">Odd semester</option>
                        <option value="even">Even Semester</option>
                    </select>
                    <span className="text-danger" id="errsem"></span><br />
                    <label htmlFor="validationCustom01" className="form-label">Name of the faculty</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="Enter the name" name="fname" />
                    <span className="text-danger" id="errfname"></span><br />
                    <label htmlFor="">Year</label><br />
                    <select name="year" className="form-select" id="">
                        <option value="">Select the year</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <span className="text-danger" id="erryear"></span><br />
                    <label htmlFor="">Sessions</label><br />
                    <input type="text" className="form-control" name="lname" placeholder="enter the Session" />
                    <span id="errlname" className="text-danger"></span><br />
                    <label htmlFor="">Course Name</label><br />
                    <input type="text" className="form-control" name="mobile" placeholder="enter the Course Name" />
                    <span id="errcontact" className="text-danger"></span><br />
                    <label htmlFor="">Score Obtained</label><br />
                    <input type="text" className="form-control" name="mail" placeholder="enter the Score Obtained" />
                    <span id="erremail" className="text-danger"></span><br />
                    <label htmlFor="">Certification Type</label><br />
                    <select name="certificate" className="form-select">
                        <option value="">Select the Type</option>
                        <option value="gold">Gold</option>
                        <option value="silver">Silver</option>
                        <option value="elite">Elite</option>
                        <option value="completed">Successfully Completed</option>
                    </select>
                    <span id="errcertificate" className="text-danger"></span><br />
                    <label htmlFor="">Certificate - PDF</label><br />
                    <input type="file" /><br /><br />
                    <div className="justify-content-around m-2 row">
                        <input type="submit" className="btn btn-outline-primary col-4" value="Submit" />
                        <input type="reset" className="btn btn-outline-danger col-4" value="Reset" />
                    </div>
                </form>
            </div>
            </div>
        </>
    );
}

export default Pro