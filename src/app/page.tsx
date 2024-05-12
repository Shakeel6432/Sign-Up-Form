"use client";

import { useForm } from "react-hook-form";

interface Form {
  firstName: string;
  lastName: string;
  password: string;
}

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();
  const onSubmit = (data: Form) => console.log(data);
  console.log(errors);

  return (
    <div className="max-w-md mx-auto mt-32 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            {...register("firstName", { required: "field required..." })}
            id="firstName"
            type="text"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.firstName && (
            <span className="block text-sm text-red-600">
              {errors.firstName.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            {...register("lastName", { required: "field required..." })}
            id="lastName"
            type="text"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.lastName && (
            <span className="block text-sm text-red-600">
              {errors.lastName?.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            {...register("password", { required: "field required..." })}
            id="password"
            type="password"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.password && (
            <span className="block text-sm text-red-600">
              {errors.password?.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Home;
