import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="h-screen bg-black flex flex-col gap-4 items-center justify-center">
      <h1 className="text-3xl font-bold text-white">React Hook Form</h1>
      <form
        className="flex flex-col gap-5 border border-gray-400 rounded-lg p-10"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          placeholder="First name..."
          className="active:outline-none text-white border border-gray-600 px-6 py-2 rounded-lg"
          {...register("firstName")}
        />
        <input
          placeholder="Last name..."
          className="active:outline-none text-white border border-gray-600 px-6 py-2 rounded-lg"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <p>Last name is required.</p>}
        <input
          placeholder="Your age..."
          className="active:outline-none text-white border border-gray-600 px-6 py-2 rounded-lg"
          {...register("age", { pattern: /\d+/ })}
        />
        {errors.age && <p>Please enter number for age.</p>}
        <input
          placeholder="Input field..."
          className="active:outline-none text-white border border-gray-600 px-6 py-2 rounded-lg bg-blue-500"
          type="submit"
        />
      </form>
    </div>
  );
};

export default App;
