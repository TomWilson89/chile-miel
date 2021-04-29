import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { login } from "./action";
import classes from "./styles.module.scss";
import { useHistory } from "react-router";
import Spinner from "../../components/Spinner";

const schema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must be at most 20 characters long"),
});

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuth, isLoading } = useSelector((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(({ email, password }) => {
    dispatch(login({ email, password }));
  });

  React.useEffect(() => {
    if (isAuth) {
      history.push("/");
    }
  }, [history, isAuth]);

  return (
    <main className={classes.Container}>
      <section className={classes.Card}>
        <ToastContainer
          newestOnTop
          className={classes.ToastContainer}
          closeButton={false}
          progressClassName={classes.SnackbarProgress}
          toastClassName={classes.SnackbarContainer}
          autoClose={3000}
        />

        <h1 className={classes.Title}>Login with your email</h1>

        <form onSubmit={onSubmit}>
          <label>
            Email
            <input {...register("email")} type="text" />
            <span> {errors?.email?.message} </span>
          </label>

          <label>
            Password
            <input {...register("password")} type="password" />
            <span> {errors?.password?.message} </span>
          </label>
          <div>
            {isLoading && <Spinner />}
            <button disabled={isLoading} type="submit">
              Send
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
