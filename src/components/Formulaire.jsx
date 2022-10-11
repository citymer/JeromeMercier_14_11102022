import React from 'react';
import { useForm } from "react-hook-form";

const Formulaire = () => {
    const { register,handleSubmit,formState:{errors}} = useForm(
      {defaultValues: {firstName:"",lastName:""}});
  
    return (
    <form onSubmit={handleSubmit((data) => {
        console.log(data)
    })}>
      <input {...register('firstName',{required: "this is required", minLength:{
        value:2,message:"Min length is 2"}})}/> 
      <p>{errors.firstName?.message}</p> 
      <input {...register("lastName",{required: "this is required", minLength:{
        value:2,
        message:"Min length is 2"
      }})}/>
      <p>{errors.lastName?.message}</p> 
      <input type="submit" />
    </form>
    );
};

export default Formulaire;