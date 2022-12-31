import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import "./Login&Register.css";


const SignUp = ({ signUpProps }) => {

    const { handleSubmit, register, reset } = useForm();
    const { singUpModal, setSignUpModal, setLoginModal } = signUpProps;

    const handleLogInModalShow = () => {
        setSignUpModal(false)
        setLoginModal(true)
    }

    const onSubmit = async (data) => {
        fetch('https://tooyoungtowed-server-side.vercel.app/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    toast.error(data.error, { id: "user", duration: 4000 });
                } else if (data.status === "fail") {
                    toast.error(data.message, { id: "user" });
                } else {
                    toast.success(data.message, { id: "user" });
                    localStorage.setItem("user", data.data.user.name)
                    setSignUpModal(false);
                    reset();
                }
            })
    };

    return (
        <>
            {singUpModal &&
                <>
                    <div className="fixed inset-0 z-30 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-[#808080] opacity-50"
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-sm mx-auto bg-white rounded-md">
                                <div className='rounded-lg px-12 sm:px-16 py-10'>
                                    <p onClick={() => setSignUpModal(false)} className="absolute top-6 right-7 font-bold cursor-pointer p-1">✕</p>
                                    <h1 className='mb-8 font-medium text-2xl text-center'>Sign up</h1>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='space-y-3'>
                                            <div className='flex flex-col items-start'>
                                                <label className="ml-0.5" htmlFor='name' >
                                                    Name
                                                </label>
                                                <input
                                                    type='text'
                                                    name='name'
                                                    id='name'
                                                    placeholder="Name"
                                                    className="login-register-input"
                                                    {...register("name")}
                                                />
                                            </div>

                                            <div className='flex flex-col items-start'>
                                                <label className="ml-0.5" htmlFor='email' >
                                                    Email
                                                </label>
                                                <input
                                                    type='email'
                                                    name='email'
                                                    id='email'
                                                    placeholder="Email"
                                                    className="login-register-input"
                                                    {...register("email")}
                                                />
                                            </div>

                                            <div className='flex flex-col items-start'>
                                                <label className="ml-0.5" htmlFor='password' >
                                                    Password
                                                </label>
                                                <input
                                                    type='password'
                                                    name='password'
                                                    id='password'
                                                    placeholder="Password"
                                                    className="login-register-input"
                                                    {...register("password")}
                                                />
                                            </div>
                                            <div className='!mt-8 '>
                                                <button
                                                    type='submit'
                                                    className='font-semibold text-white py-3 rounded-full bg-[#5c1112] w-full'
                                                >
                                                    Sign up
                                                </button>
                                            </div>
                                            <div>
                                                <p>
                                                    Already have an account?{" "}
                                                    <span onClick={handleLogInModalShow}
                                                        className='hover:underline cursor-pointer'
                                                    >
                                                        Login
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default SignUp;