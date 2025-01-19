import SignUpForm from "./signup";
import Link from "next/link";
const Page = () => {
  return (
    <div className="min-h-screen flex w-full py-20 flex-col justify-center items-center gap-4 p-5">
      <div className="container mt-10 text-center">
        <div className="container flex flex-col gap-3 p-4">
          {" "}
          <h1 className="text-3xl font-bold">Create your account</h1>
          <p className="text-neutral-600">
            Already a member?{" "}
            <Link href="/login" className="text-blue-500 hover:text-opacity-80">
              Login
            </Link>
          </p>
        </div>
      </div>
      <SignUpForm />
      <hr />
      <span>or </span> <hr />
      <p>sign up with</p>
      {"list of providers"}
      <div></div>
    </div>
  );
};
export default Page;
