const AuthLayout = ({children} : {children : React.ReactNode;}) => {
  //how does this AuthLayout connect with the sign in & sign up page?
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  )
}

export default AuthLayout;