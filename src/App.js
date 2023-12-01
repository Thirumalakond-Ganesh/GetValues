import React from "react";
import { Controller, useForm } from "react-hook-form";
import './App.css';
const App=()=>{
  const {control, handleSubmit, getValues}=useForm();
  const onSubmit=(data)=>{
    console.log(data);
  };

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} placeholder="First Name" />}
      />   
      <Controller
      name="lastName"
      control={control}
      defaultValue=""
      render={({ field }) => <input {...field} placeholder="Last Name" />}
      />   
      <button type="submit">Submit</button>
      <div>
        <h2>Form Values</h2>
        <pre>{JSON.stringify(getValues(), null,2)}</pre>
      </div>
    </form>
  );
};
export default App;