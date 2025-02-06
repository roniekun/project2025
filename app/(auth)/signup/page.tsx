import SignUpForm from "./signup";

const Page = () => {
  return (
    <div className="min-h-screen flex w-full flex-col justify-center items-center">
      <div className="container text-center">
        <div className="container flex flex-col gap-3 p-4">
          {" "}
          <h1 className="text-2xl font-black">Create your account</h1>
        </div>
      </div>
      <div className="p-5 rounded-md shadow-xl">
        <SignUpForm />
      </div>
  
    </div>
  );
};
export default Page;
