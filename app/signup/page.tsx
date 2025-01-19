import SignUpForm from "./signup"
const Page = () => {
  return (
    <div className="min-h-screen flex w-full py-20 flex-col justify-center items-center gap-4 p-[1.5rem]">
        
        <div className="container mt-20 text-center"><h1 className="text-3xl font-bold">Create your account</h1>
        <p className="text-neutral-600">Enter your information to get started</p></div><SignUpForm /></div>
  )
}
export default Page