import { useStepForm } from "../../hooks/useStepForm"
import { Button } from "../Button"
import { Input } from "../Input"

export function StreetDataUser() {

  const { formData, setFormData, prevStep, nextStep, errorForm } = useStepForm()

  return (
    <>
      <Input
        type="text"
        label="Address"
        labelFor="address"
        placeholder="Street address"
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
        onClick={prevStep}
        type="submit"
        className="mt-4"
      >Voltar</Button>
      <Button
        onClick={nextStep}
        type="submit"
        className="mt-4"
      >Continuar</Button>
    </>
  )
}