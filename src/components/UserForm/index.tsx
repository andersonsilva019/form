import { FormEvent, useState } from "react"
import { useStepForm } from "../../hooks/useStepForm";
import { PersonDataUser } from "./PersonDataUser";
import { StreetDataUser } from "./StreetDataUser";
import { SuccessSendFormData } from "./SuccessSendFormData";

export function UserForm() {

  const { currentStep } = useStepForm()

  switch (currentStep) {
    case 1:
      return <PersonDataUser />
    case 2:
      return <StreetDataUser />
    case 3:
      return <SuccessSendFormData />
    default:
      return null
  }
}