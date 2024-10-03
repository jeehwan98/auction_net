import RegisterForm from "@/components/auth/register/register-form";

export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 text-gray-900">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold  text-center mb-4">회원가입</h2>
        <RegisterForm />
      </div>
    </main>
  )
}