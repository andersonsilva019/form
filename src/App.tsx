import { FormEvent, useState } from 'react'
import * as Yup from 'yup'
import { Button } from './components/Button'
import { Input } from './components/Input'

import './styles/global.css'
import { yupErrorValidate } from './utils/yupErrorValidate'

type FormDataFields = {
  email: string
  first_name: string
  last_name: string
  address: string
  address_complement?: string
}

const schemaFormData = Yup.object().shape({
  email: Yup.string().required('Email required field').email('Invalid email'),
  first_name: Yup.string().required('First name required field'),
  last_name: Yup.string().required('Last name required field'),
  address: Yup.string().required('Address required field'),
  address_complement: Yup.string().required('Address complement required field'),
})

function App() {
  const [errorForm, setErrorForm] = useState({} as any)
  const [formData, setFormData] = useState<FormDataFields>({
    email: '',
    first_name: '',
    last_name: '',
    address: '',
    address_complement: '',
  })

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
      console.table(formData)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const objectValidate = yupErrorValidate(error)
        setErrorForm(objectValidate)
      }
      console.log(error.message)
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-full bg-gray-100">
      <h2 className="mb-6">Formulário</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white h-full rounded-lg p-8 w-full max-w-2xl"
      >
        <Input
          type="email"
          label="Email address"
          labelFor="email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          error={errorForm?.email}
        />
        <div className="flex items-end justify-between mb-4 w-full">
          <Input
            type="text"
            label="Full name"
            labelFor="name"
            placeholder="First name"
            className="mr-4"
            value={formData.first_name}
            onChange={e => setFormData({ ...formData, first_name: e.target.value })}
            error={errorForm?.first_name}
          />
          <Input
            type="text"
            placeholder="Last name"
            value={formData.last_name}
            onChange={e => setFormData({ ...formData, last_name: e.target.value })}
            error={errorForm?.last_name}
          />
        </div>
        <Input
          type="text"
          label="Address"
          labelFor="address"
          placeholder="Street Address"
          value={formData.address}
          onChange={e => setFormData({ ...formData, address: e.target.value })}
          error={errorForm?.address}
        />
        <Input
          className="mt-2"
          placeholder="Office, Suite, Apt."
          fieldRequired={false}
          value={formData.address_complement}
          onChange={e => setFormData({ ...formData, address_complement: e.target.value })}
          error={errorForm?.address_complement}
        />
        <Button
          type="submit"
          className="mt-4"
        >Submit</Button>
      </form>
    </main>
  );
}

export default App;
