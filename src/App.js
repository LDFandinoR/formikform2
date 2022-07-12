import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email:'',
      password:''
    },

    onSubmit: values => {
      console.log('form: ', values);
    },

    validate: values => {
      let re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      let errors = {};
      if (!values.password) errors.password = 'Field required';
      if (!values.email) errors.email = 'Field required';
      else if (!re.test(values.email)) errors.email = 'Username should be an email';
      return errors;
 
    }
  });

  return (
    <div>
      <form  onSubmit={formik.handleSubmit}>

        <div>Email</div>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div id='emailError' style={{color: 'red'}}>{formik.errors.email}</div>: null}

        <div>Password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div id='pswError' style={{color: 'red'}}>{formik.errors.password}</div>: null}

        <button id="submitBtn" type='submit'>Submit</button>


      </form>
    </div>
    
  );
}

export default App;
