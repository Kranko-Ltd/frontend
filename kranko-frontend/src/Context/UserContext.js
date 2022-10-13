import Router from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import { LOGIN_MUTATION, CREATE_USER_MUTATION, SIGNUP_MUTATION } from "../mutations/auth";
import { useMutation, useLazyQuery } from "@apollo/client";
import { GET_ROLE } from "../Queries/auth";
import { toast } from "react-toastify";


const getInitialState = () => {};

export const UserContext = createContext(getInitialState);

const UserProvider = ({ children, ...props }) => {

  const [user, setUser] = useState(null);
  const [loginMutation, { }] = useMutation(LOGIN_MUTATION)
  const [signUpMutation, { }] = useMutation(SIGNUP_MUTATION)
  const [registerMutation, { }] = useMutation(CREATE_USER_MUTATION)
  const [roleQuery, { }] = useLazyQuery(GET_ROLE);

  const isAuthenticated = !user;

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [])

  async function signIn({email, password}) {

    const { data: res } = await loginMutation({ variables: { email, password } })

    setCookie(undefined, "auth_token", res.login.jwt, {
      maxAge: 60 * 60 * 1, // 1 hour
    })

    localStorage.setItem("user", JSON.stringify(res.login.user))

    setUser(JSON.parse(localStorage.getItem("user")))

    console.log("user from login: ", user)

    await roleQuery({
      onCompleted: (data) => {

        console.log("role: ", data.me.role.name);

        if(data.me.role.name == "Administrator") Router.push('/manager-dashboard');
        else Router.push('/dashboard');
      }
    });

  }

  async function register({ email, username, password, last_name, first_name, country }) {

    try{
    
      const { data: res } = await signUpMutation({
        variables: { username: username, email: email, password: password }
      });

      setCookie(undefined, "auth_token", res.register.jwt, {
        maxAge: 60 * 60 * 1, // 1 hour
      })
      
      await registerMutation({
          variables: {
            data: {
              first_name,
              last_name,
              country,
              user: res.register.user.id
            }
          }
        });

      console.log("user for register: ",res.register.user)

      localStorage.setItem("user", JSON.stringify(res.register.user))

      setUser(JSON.parse(localStorage.getItem("user")))

      await roleQuery({
        onCompleted:(data) => {
          console.log("role: ", data.me.role.name);

          toast.success("Account created succesfully");

          Router.push('/apply');
        }
      });
    
    }catch (error) {
      console.log(error);
      return toast.error(error.message);
    }
  }

  const logout = async () => {
    await destroyCookie(undefined, "auth_token") 
    localStorage.removeItem("user")
    setUser(null)
    isAuthenticated = false
    Router.push('/')
    
  }

  return (
    <UserContext.Provider {...props} value={{ isAuthenticated, user, signIn, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
