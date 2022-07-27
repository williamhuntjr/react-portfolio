import React, { FC, useEffect } from 'react'
import { Controller, useForm } from "react-hook-form"
import { Helmet } from 'react-helmet'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import Slider from '@mui/material/Slider'
import Input from '@mui/material/Input'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ContactService } from '../services/contact.service'

import { IContactFormState } from './lets-connect.types'
import { defaultContactFormValues } from './lets-connect.constants'
import { ContactFormFormField, ContactFormFormLabel } from './lets-connect.types'

import styles from './lets-connect.module.scss'

export const LetsConnect: FC = () => {
  const { 
    control,
    handleSubmit,
    watch
  } = useForm<IContactFormState>({
    defaultValues: defaultContactFormValues,
    mode: 'onBlur',
  })

  const [budget, setBudget] = React.useState<number>(250)

  const onSaveForm = async (formData: IContactFormState): Promise<void> => {
    try {
      const data = { 
        ...formData,
        budget: String(budget)
      }
      await ContactService.create(data)
      toast.success("Your details have been submitted!")
    } catch {
      toast.error("Unable to submit form.")
    }
  }

  const submitForm: (e: React.BaseSyntheticEvent) => void = (e) => {
    e.stopPropagation() // To prevent submitting parent forms
    const eventHandler = handleSubmit(onSaveForm)
    void eventHandler(e)
  }

  useEffect(() => setBudget(250), [])
  useEffect(() => {
    const subscription = watch(
      (value, { name }) => { 
        if (name === ContactFormFormField.Budget) {
          setBudget(Number(value.budget))
        }
      }
    )
    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <div className={styles.letsConnect}>
      <Helmet>
          <title>Lets Connect | William Hunt Jr</title>
      </Helmet>
      <ToastContainer />
      <div className={styles.letsConnectContent}>
        <div className={styles.letsConnectHeader}>
          Lets <span className="boldText">Connect</span>.
        </div>
        <div className={styles.letsConnectSubHeader}>
          Enter your information to get in touch.
        </div>
        <form className={styles.letsConnectForm} onSubmit={submitForm}>
          <div className={styles.letsConnectFormRow}>
            <div className={styles.letsConnectFormCol}>
              <Controller
                name={ContactFormFormField.Name}
                control={control}
                render={(({field: { onChange, value }}) => (
                  <Input 
                    onChange={onChange} 
                    classes={{root: styles.formInputContainer, input: styles.formInput}} 
                    value={value} 
                    placeholder={ContactFormFormLabel.Name}
                  />
                ))}
              />
            </div>
            <div className={styles.letsConnectFormCol}>
              <Controller
                name={ContactFormFormField.Email}
                control={control}
                render={(({field: { onChange, value }}) => (
                  <Input 
                    onChange={onChange} 
                    classes={{root: styles.formInputContainer, input: styles.formInput}} 
                    value={value} 
                    placeholder={ContactFormFormLabel.Email}
                  />
                ))}
              />
            </div>
          </div>
          <div className={styles.letsConnectFormRow}>
            <div className={styles.letsConnectFormCol}>
              <Controller
                name={ContactFormFormField.Website}
                control={control}
                render={(({field: { onChange, value }}) => (
                  <Input 
                    onChange={onChange} 
                    classes={{root: styles.formInputContainer, input: styles.formInput}} 
                    value={value} 
                    placeholder={ContactFormFormLabel.Website}
                  />
                ))}
                />
            </div>
            <div className={styles.letsConnectFormCol}>
              {ContactFormFormLabel.Budget}<span className="boldText">${budget} USD</span>
              <Controller
                  name={ContactFormFormField.Budget}
                  control={control}
                  render={(({field: { onChange }}) => (
                    <Slider
                      size="small"
                      defaultValue={250}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      step={10} 
                      min={250} 
                      max={5000}
                      onChange={onChange}
                    />
                  ))}
                />
            </div>
          </div>
          <div className={styles.letsConnectSelectAreaContainer}>
            <Controller
              name={ContactFormFormField.Message}
              control={control}
              render={(({field: { onChange, value }}) => (
                <TextField
                  label={ContactFormFormLabel.Message}
                  multiline
                  rows={3}
                  className={styles.letsConnectSelectArea}
                  onChange={onChange}
                  value={value ?? ''}
                  variant="standard"
                />
              ))}
            />
          </div>
          <div className={styles.letsConnectFormCheckbox}>
            <Controller
              name={ContactFormFormField.Urgent}
              control={control}
              render={(({field: { onChange, value }}) => (
                <FormControlLabel 
                  control={<Checkbox className={styles.formCheckBox} defaultChecked />} 
                  label={ContactFormFormLabel.Urgent}
                  onChange={onChange}
                  value={value}
                />
              ))}
            />
          </div>
          <div className={styles.buttonContainer}>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </div>
        </form> 
      </div>
    </div>
  )
}
