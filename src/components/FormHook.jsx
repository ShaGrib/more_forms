import React, {useState} from 'react';

const FormHook = (props) => { 

    let [firstName, setfirstName] = useState('');
    let [lastName, setlastName] = useState('');
    let [email, setemail] = useState('');
    let [password, setpassword] = useState('');
    let [confirmpassword, setconfirmpassword] = useState();
    
    return(
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="">First Name: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=> setfirstName(e.target.value)} />

                    {
                        firstName.length < 2?
                            <p className="text-danger">First Name must be at least two characters.</p>:
                            ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=> setlastName(e.target.value)} />
                    {
                        lastName.length < 2?
                        <p className="text-danger">Last Name must be at least two characters.</p>:
                        ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Email: </label>
                    <input type="email" name="" id="" className="form-control" onChange={(e)=> setemail(e.target.value)} />
                    {
                        email.length < 2?
                        <p className="text-danger">Email must be at least two characters.</p>:
                        ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Password: </label>
                    <input type="password" name="" id="" className="form-control" onChange={(e)=> setpassword(e.target.value)}/>
                    {
                        password.length < 8?
                        <p className="text-danger">Password must be at least eight characters.</p>:
                        ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password: </label>
                    <input type="password" name="" id="" className="form-control" onChange={(e)=> setconfirmpassword(e.target.value)}/>
                    {
                        confirmpassword !== password?
                        <p className='text-danger'>Passwords must match.</p>:
                        ''
                    }
                </div>
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpassword}</p>
            </div>
        </div>
    );
};

export default FormHook;