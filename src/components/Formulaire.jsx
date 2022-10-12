import React from 'react';
import Select from 'react-select'
import { useForm,Controller } from "react-hook-form";

const Formulaire = () => {
    const { register,handleSubmit,control,formState:{errors}} = useForm(
      {defaultValues: {firstName:"",lastName:"",zipcode:""}});
  
    return (
    <form onSubmit={handleSubmit((data) => {
        console.log(data)
    })}>
      <p>First Name</p>
      <input  {...register('firstName',{required: "this is required", minLength:{
        value:2,message:"Min length is 2"},pattern:/[A-Za-z]/})}/> 
      <p>{errors.firstName?.message}</p> 
        <p>last Name</p>
      <input {...register("lastName",{required: "this is required", minLength:{
        value:2,
        message:"Min length is 2"
      }})}/>
      <p>{errors.lastName?.message}</p> 
      <p>Date of Birth</p>
      <input type="date"{...register("date", {valueAsDate:true})}/>
      <p>Start Date</p>
      <input type="date"{...register("startdate", {valueAsDate:true})}/>
      <fieldset>
        <legend>Address</legend>
        <p>Street</p>
        <input {...register("street", {required:"this is required"})}/>
        <p>City</p>
        <input {...register("city", {required:"this is required"})}/>
        <p>State</p>
        <Controller
        name="select"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
          ]} 
          />}/>
          <p>Zip Code</p>
        <input type="number" {...register("zipcode",{min:0,max: 999999})}/>
      </fieldset>
      <p>Departement</p>
      <Controller
        name="Departement"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={[
            { value: "sales", label: "Sales" },
            { value: "marketing", label: "Marketing" },
            { value: "engineering", label: "Engineering" },
            { value: "humanresources", label: "Human Resources" },
            { value: "legal", label: "Legal" }
          ]} 
        />}/>
      <input type="submit" className='submit' />
    </form>
    );
};

export default Formulaire;