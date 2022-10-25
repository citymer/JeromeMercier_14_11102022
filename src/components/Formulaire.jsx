import React, { useState, useContext, Fragment, useEffect } from 'react'
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { statesName } from '../datas/states'
import { DataContext } from '../utils/context'
import { Modal } from 'simply-modale'

/**
 * builds a form with different fields to fill
 * @returns a form
 */

const Formulaire = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { addEmployees } = useContext(DataContext)

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

  /**
   * recover the data and put it in the right format
   * @param {object} data
   * @param {event} e
   * @return {object} the data entered in the form in the correct format
   */
  const onSubmit = (data, e) => {
    e.preventDefault()
    addEmployees({
      firstname: data.firstName,
      lastname: data.lastName,
      startdate: data.stardate,
      departement: data.departement.value,
      dateOfBirth: data.dateOfBirth,
      street: data.street,
      city: data.city,
      state: data.state.value,
      zipcode: data.zipcode,
    })
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  useEffect(() => {
    reset()
  }, [isSubmitSuccessful, reset])

  // writes the text contained in the modal
  const title = 'New employee created !'

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="block">
          <label htmlFor="first">First Name</label>
          <input
            id="first"
            {...register('firstName', {
              required: 'this is required',
              minLength: {
                value: 2,
                message: 'Min length is 2',
              },
              pattern: /[A-Za-z]/,
            })}
          />
          <p className="error" role="alert">
            {errors.firstName?.message}
          </p>
        </div>
        <div className="block">
          <label htmlFor="last">last Name</label>
          <input
            id="last"
            {...register('lastName', {
              required: 'this is required',
              minLength: {
                value: 2,
                message: 'Min length is 2',
              },
              pattern: /[A-Za-z]/,
            })}
          />
          <p className="error" role="alert">
            {errors.lastName?.message}
          </p>
        </div>
        <div className="block">
          <label htmlFor="birth">Date of Birth</label>
          <Controller
            name="dateOfBirth"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: 'Enter Date of birth',
              },
            }}
            render={({ field: { ref, ...rest } }) => (
              <input id="birth" type="date" {...rest} />
            )}
          />
          <p className="error">{errors.dateOfBirth?.message}</p>
        </div>
        <div className="block">
          <label htmlFor="start">Start Date</label>
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
              <input id="start" type="date" {...rest} />
            )}
          />
          <p className="error">{errors.stardate?.message}</p>
        </div>
        <fieldset>
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input
            id="street"
            {...register('street', { required: 'Enter your street' })}
          />
          <p className="error" role="alert">
            {errors.street?.message}
          </p>
          <label htmlFor="city">City</label>
          <input
            id="city"
            {...register('city', { required: 'Enter your city' })}
          />
          <p className="error" role="alert">
            {errors.city?.message}
          </p>
          <label>State</label>
          <Controller
            name="state"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: 'Enter your state',
              },
            }}
            render={({ field }) => (
              <Select aria-label="state" {...field} options={statesName} />
            )}
          />
          <p className="error">{errors.state?.message}</p>
          <label htmlFor="zip">Zip Code</label>
          <input
            id="zip"
            type="number"
            {...register('zipcode', {
              required: 'Enter your zip code',
              min: 0,
              max: 999999,
            })}
          />
          <p className="error" role="alert">
            {errors.zipcode?.message}
          </p>
        </fieldset>
        <p>Departement</p>
        <Controller
          name="departement"
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: 'Enter your departement',
            },
          }}
          control={control}
          render={({ field }) => (
            <Select
              aria-label="departement"
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
      <Fragment>
        {modalIsOpen && <Modal closeModal={closeModal} title={title} />}
      </Fragment>
    </>
  )
}

export default Formulaire
