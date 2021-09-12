import { useContext } from 'react'
import { StepFormContext, StepFormContextData } from '../context/StepForm'

export function useStepForm(): StepFormContextData {
  const context = useContext(StepFormContext);

  if (!context) {
    throw new Error('useStepForm must ne used within a AuthProvider');
  }

  return context;
}