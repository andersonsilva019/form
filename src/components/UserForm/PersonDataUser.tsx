import { useStepForm } from "../../hooks/useStepForm"
import { Button } from "../Button"
import { Input } from "../Input"


export function PersonDataUser() {

  const { nextStep, formData, setFormData, errorForm } = useStepForm()

  return (
    <>
      <Input
        type="email"
        label="Email address"
        placeholder="example@example.com"
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
      <Button
        onClick={nextStep}
        type="button"
        className="mt-4"
      >Continuar</Button>
    </>
  )
}