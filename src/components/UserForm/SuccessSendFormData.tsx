import { useStepForm } from "../../hooks/useStepForm";
import { Button } from "../Button";

export function SuccessSendFormData() {
  const { prevStep } = useStepForm()
  return (
    <>
      <Button
        onClick={prevStep}
        type="submit"
        className="mt-4"
      >Voltar</Button>
      <Button
        type="submit"
        className="mt-4"
      >Enviar</Button>
    </>
  )
}