import { createContext, FormEvent, useState } from 'react'
import * as Yup from 'yup'
import { yupErrorValidate } from '../utils/yupErrorValidate'

type StepFormContextProviderProps = {
  children: React.ReactNode
}

type FormDataFields = {
  email: string
  first_name: string
  last_name: string
  address: string
  address_complement?: string
}

export type StepFormContextData = {
  nextStep: () => void
  prevStep: () => void
  currentStep: number
  formData: FormDataFields
  setFormData: React.Dispatch<React.SetStateAction<FormDataFields>>
  handleSubmit: (event: FormEvent) => void
  errorForm: any
}

const schemaFormData = Yup.object().shape({
  email: Yup.string().required('Email required field').email('Invalid email'),
  first_name: Yup.string().required('First name required field'),
  last_name: Yup.string().required('Last name required field'),
  address: Yup.string().required('Address required field'),
  address_complement: Yup.string().required('Address complement required field'),
})

export const StepFormContext = createContext({} as StepFormContextData)

export function StepFormContextProvider({
  children
}: StepFormContextProviderProps) {

  const [errorForm, setErrorForm] = useState({} as any)

  const [currentStep, setCurrentStep] = useState(1)

  const [formData, setFormData] = useState<FormDataFields>({
    email: '',
    first_name: '',
    last_name: '',
    address: '',
    address_complement: '',
  })

  const nextStep = () => {
    setCurrentStep(prevState => prevState + 1)
  }

  const prevStep = () => setCurrentStep(prevState => prevState - 1)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      await schemaFormData.validate(formData, { abortEarly: false })
      setErrorForm({})
      setFormData({
        email: '',
        first_name: '',
        last_name: '',
        address: '',
        address_complement: '',
      })
      setCurrentStep(1)
      console.log(formData)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const objectValidate = yupErrorValidate(error)
        setErrorForm(objectValidate)
      }
      console.log(error.message)
    }
  }


  return (
    <StepFormContext.Provider
      value={{
        handleSubmit,
        nextStep,
        prevStep,
        currentStep,
        formData,
        setFormData,
        errorForm
      }}
    >
      {children}
    </StepFormContext.Provider>
  )
}