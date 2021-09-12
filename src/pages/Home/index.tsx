import { UserForm } from "../../components/UserForm"
import { useStepForm } from "../../hooks/useStepForm"

export default function Home() {

  const { handleSubmit } = useStepForm()

  return (
    <main className="flex flex-col items-center justify-center min-h-full bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white h-full rounded-lg p-8 w-full max-w-2xl"
      >
        <UserForm />
      </form>
    </main>
  )
}