"use client";
import Link from "next/link";
import styles from "@/styles/login.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import LoadingSpinner from "@/component/LoadingSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [failRes, setFailRes] = useState(false);
  const [failResMsg, setFailResMsg] = useState(
    "Login failed. Please, try again."
  );
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    username: "",
    password: "",
  };

  const signInSchema = Yup.object().shape({
    username: Yup.string().min(6, ".minimum 6 chars").required(".required"),

    password: Yup.string()
      .required(".required")
      .min(6, ".minimum 6 chars")
      .max(20, ".maximum 20 chars")
      .matches(
        /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        ".must contain uppercase & 1 special char"
      ),
  });

  const submitHandler = async (values) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://kranti-back.onrender.com/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        }
      );
      const responseData = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setFailRes(true);
        setFailResMsg(responseData.error);
        console.log(responseData);
        console.log(responseData.error);
        throw new Error(responseData);
      }

      const token = responseData.token;
      localStorage.setItem("token", token);
      console.log("Login successful:", responseData);
      setFailRes(false);
      router.push("/dashboard");
    } catch (err) {
      setIsLoading(false);
      setFailRes(true);
      console.log("Error during login:", err);
    }
  };

  return (
    <div className={styles.auth_wrapper}>
      <div className={styles.auth_inner}>
        <h3>Sign In</h3>

        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={(values) => {
            submitHandler(values);
          }}
        >
          {(formik) => {
            const { errors, touched, isValid, dirty } = formik;
            return (
              <div className={styles.container}>
                <div className={styles.loader_wrap}>
                  {!isLoading && failRes && (
                    <span className={styles.error}>{failResMsg}</span>
                  )}
                  {isLoading && <LoadingSpinner />}
                </div>

                <Form>
                  <div className={styles.form_row}>
                    <label htmlFor="username">Username</label>
                    <Field
                      type="text"
                      name="username"
                      id="username"
                      style={
                        touched.username
                          ? errors.username
                            ? { boxShadow: "0 0 0 2px red" }
                            : { boxShadow: "0 0 0 2px #622bbb" }
                          : { boxShadow: "0 0 0 2px #b7b7b7" }
                      }
                    />
                    <span
                      className={
                        formik.errors.username ? styles.error : styles.no_error
                      }
                    >
                      {touched.username &&
                        (formik.errors.username ? formik.errors.username : "✓")}
                    </span>
                  </div>

                  <div className={styles.form_row}>
                  <label htmlFor="password">
                      Password{" "}
                      <span
                        className={styles.show_pass}
                        onClick={(e) => setShowPassword(!showPassword)}
                      >
                        {!showPassword ? (
                          <FontAwesomeIcon icon={faEye} />
                        ) : (
                          <FontAwesomeIcon icon={faEyeSlash} />
                        )}
                      </span>
                    </label>
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      style={
                        touched.password
                          ? errors.password
                            ? { boxShadow: "0 0 0 2px red" }
                            : { boxShadow: "0 0 0 2px #622bbb" }
                          : { boxShadow: "0 0 0 2px #b7b7b7" }
                      }
                    />
                
                    <span
                      className={
                        formik.errors.password ? styles.error : styles.no_error
                      }
                    >
                      {touched.password &&
                        (formik.errors.password ? formik.errors.password : "✓")}
                    </span>
                  </div>
                  <div className={styles.submit_btn_wrap}>
                    <button
                      type="submit"
                      className={
                        !(!isLoading && dirty && isValid)
                          ? styles.disabled_btn
                          : styles.enabled_btn
                      }
                      disabled={!(!isLoading && dirty && isValid)}
                    >
                      Log In
                    </button>
                    <div className={styles.forgot_password}>
                      <p>
                        {"New user ? "}
                        <Link href="/signup">Sign Up</Link>
                      </p>
                    </div>
                  </div>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

/* 
<div className="d-grid">
            <Button type="submit" className={styles.button} size="sm" color="secondary">
              Submit
            </Button>
          </div>
          <p className={`${styles.forgot_password} `}>
            <Link href="/signup">Sign Up</Link>
          </p>
*/
