import React, { useEffect } from 'react'
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'

const Formulaire = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      zipcode: '',
    },
  })

  const onSubmit = (data) => console.log(data)

  useEffect(() => {
    reset()
  }, [isSubmitSuccessful, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isSubmitSuccessful && <div className="alert">Employee Created! </div>}
      <p>First Name</p>
      <input
        {...register('firstName', {
          required: 'this is required',
          minLength: {
            value: 2,
            message: 'Min length is 2',
          },
          pattern: /[A-Za-z]/,
        })}
      />
      <p className="error">{errors.firstName?.message}</p>
      <p>last Name</p>
      <input
        {...register('lastName', {
          required: 'this is required',
          minLength: {
            value: 2,
            message: 'Min length is 2',
          },
          pattern: /[A-Za-z]/,
        })}
      />
      <p className="error">{errors.lastName?.message}</p>
      <p>Date of Birth</p>
      <Controller
        name="date"
        control={control}
        defaultValue=""
        rules={{
          required: {
            value: true,
            message: 'Enter Date of birth',
          },
        }}
        render={({ field: { ref, ...rest } }) => (
          <input type="date" {...rest} />
        )}
      />
      <p className="error">{errors.date?.message}</p>
      <p>Start Date</p>
      <Controller
        name="stardate"
        control={control}
        defaultValue=""
        rules={{
          required: {
            value: true,
            message: 'Enter Start date',
          },
        }}
        render={({ field: { ref, ...rest } }) => (
          <input type="date" {...rest} />
        )}
      />
      <p className="error">{errors.stardate?.message}</p>
      <fieldset>
        <legend>Address</legend>
        <p>Street</p>
        <input {...register('street', { required: 'this is required' })} />
        <p className="error">{errors.street?.message}</p>
        <p>City</p>
        <input {...register('city', { required: 'this is required' })} />
        <p className="error">{errors.city?.message}</p>
        <p>State</p>
        <Controller
          name="state"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'this is required',
            },
          }}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: 'choco', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
            />
          )}
        />
        <p className="error">{errors.state?.message}</p>
        <p>Zip Code</p>
        <input
          type="number"
          {...register('zipcode', {
            required: 'this is required',
            min: 0,
            max: 999999,
          })}
        />
        <p className="error">{errors.zipcode?.message}</p>
      </fieldset>
      <p>Departement</p>
      <Controller
        name="departement"
        rules={{
          required: {
            value: true,
            message: 'this is required',
          },
        }}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: 'sales', label: 'Sales' },
              { value: 'marketing', label: 'Marketing' },
              { value: 'engineering', label: 'Engineering' },
              { value: 'humanresources', label: 'Human Resources' },
              { value: 'legal', label: 'Legal' },
            ]}
          />
        )}
      />
      <p className="error">{errors.departement?.message}</p>
      <input type="submit" className="submit" value="Save" />
    </form>
  )
}

export default Formulaire
